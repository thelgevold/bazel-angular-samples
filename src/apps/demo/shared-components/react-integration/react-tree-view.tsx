import {CountryViewModelFactory} from './country-view-model';

declare var React: any;

declare var Dispatcher: any;
declare var EventEmitter: any;
declare var _ : any;

var AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function(action){
    this.dispatch({
                source: 'VIEW_ACTION',
                action: action
    });
};

AppDispatcher.register( function( payload ) {

    switch( payload.eventName ) {

        case 'expand-collapse':
            NodeStore.toggleNode(payload.node);
            break;

    }

    return true;

});

var NodeStore = _.extend({}, EventEmitter.prototype, {

    _nodes : new CountryViewModelFactory().createModel(),

    getNodes: function(){
        return this._nodes;
    },

    toggleNode:function(node){
        for(var i = 0; i < node.children.length; i++){
            node.children[i].visible = !node.children[i].visible;
        }

        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }

});

interface TreeNodeProps{
   children:Array<any>,
   node:any
}

var TreeNode = React.createClass({

    toggle: function(e){
        AppDispatcher.dispatch({
            eventName: 'expand-collapse',
            node: this.props.node
        });
    },

    render: function(){

        var nodes = this.props.children.map(function(n){

            if(n.visible){
                return <TreeNode node={n} children={n.children}  />
            }
        });

        return (

            <li>
                <span onClick={this.toggle}>{this.props.node.getIcon()}</span>
                <span>{this.props.node.text}</span>
                <ul>{nodes}</ul>
            </li>

        );
    }

});

interface TreeViewProps{
   title:String
}

var TreeView = React.createClass({

    getInitialState: function(){
      return {countries:NodeStore.getNodes()};
    },

    onChange: function(){
        this.setState({countries:NodeStore.getNodes()});
    },

    componentDidMount: function() {
        NodeStore.addChangeListener(this.onChange);
    },

    componentWillUnmount: function() {
        NodeStore.removeChangeListener(this.onChange);
    },

    render: function(){

        var countries = this.state.countries;

        var nodes = countries.map(function(n){
            return <TreeNode node={n} children={n.children} />
        });

        return(
           <div>
           <h2>{this.props.title}</h2>
           <ul>
            {nodes}
           </ul>
           </div>
        );

    }

});

export class ReactTreeView{

    static initialize(title){
        React.render(<TreeView title={title} />, document.getElementById('react-tree-view'));
    }

}