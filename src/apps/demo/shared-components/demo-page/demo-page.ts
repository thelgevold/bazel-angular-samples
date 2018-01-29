import {Component} from '@angular/core';

import {Location} from '@angular/common';

@Component({
    selector: 'demo-page',
    template: `<div class="container">

    <div class="jumbotron">
        <h1>Angular sample components</h1>
        <p>
            More documentation about each specific component can be found
            <a href="http://www.syntaxsuccess.com/angular-2-articles">here</a>.
        </p>
        <p>Current version: Angular 6.0.0 - Beta 1</p>
    </div>

    <div>
        <div class="list-group col-md-3">
            <a [class.active]="getLinkStyle('/demo/spreadsheet')" [routerLink]="['/demo/spreadsheet']" class="list-group-item">Virtualized Spreadsheet</a>
            <a [class.active]="getLinkStyle('/demo/countries')" [routerLink]="['/demo/countries']" class="list-group-item">Lazy Loaded Tree View</a>
            <a [class.active]="getLinkStyle('/demo/rxjs')" [routerLink]="['/demo/rxjs']" class="list-group-item">RxJs Streams</a>
            <a [class.active]="getLinkStyle('/demo/friends')" [routerLink]="['/demo/friends']" class="list-group-item">RxJs Caching</a>
            <a [class.active]="getLinkStyle('/demo/react')" [routerLink]="['/demo/react']" class="list-group-item">React Integration</a>
            <a [class.active]="getLinkStyle('/demo/graph')" [routerLink]="['/demo/graph']" class="list-group-item">Graph</a>
            <a [class.active]="getLinkStyle('/demo/algorithms')" [routerLink]="['/demo/algorithms']" class="list-group-item">Insertion Sort</a>
            <a [class.active]="getLinkStyle('/demo/redux')" [routerLink]="['/demo/redux']" class="list-group-item">Redux</a>
            <a [class.active]="getLinkStyle('/demo/cars')" [routerLink]="['/demo/cars']" class="list-group-item">Error Handling in RxJs</a>
            <a [class.active]="getLinkStyle('/demo/buffering')" [routerLink]="['/demo/buffering']" class="list-group-item">Buffering in RxJs</a>
            <a [class.active]="getLinkStyle('/demo/survey')" [routerLink]="['/demo/survey']" class="list-group-item">Dynamic Form</a>
            <a [class.active]="getLinkStyle('/demo/pub-sub')" [routerLink]="['/demo/pub-sub']" class="list-group-item">Pub Sub</a>
            <a [class.active]="getLinkStyle('/demo/text-editor')" [routerLink]="['/demo/text-editor']" class="list-group-item">Text Editor</a>
            <a [class.active]="getLinkStyle('/demo/form')" [routerLink]="['/demo/form']" class="list-group-item">Form</a>
            <a [class.active]="getLinkStyle('/demo/change')" [routerLink]="['/demo/change']" class="list-group-item">Change Detection</a>
            <a [class.active]="getLinkStyle('/demo/http')" [routerLink]="['/demo/http']" class="list-group-item">Http</a>
            <a [class.active]="getLinkStyle('/demo/input')" [routerLink]="['/demo/input']" class="list-group-item">Input Controls</a>
            <a [class.active]="getLinkStyle('/demo/treeview')" [routerLink]="['/demo/treeview']" class="list-group-item">Recursive tree view</a>
            <a [class.active]="getLinkStyle('/demo/grid')" [routerLink]="['/demo/grid']" class="list-group-item">Data Grid</a>
            <a [class.active]="getLinkStyle('/demo/address')" [routerLink]="['/demo/address']" class="list-group-item">Address Book</a>
            <a [class.active]="getLinkStyle('/demo/jquery')" [routerLink]="['/demo/jquery']" class="list-group-item">JQuery Integration</a>
            <a [class.active]="getLinkStyle('/demo/parent-child')" [routerLink]="['/demo/parent-child']" class="list-group-item">Access Child Component</a>
            <a [class.active]="getLinkStyle('/demo/contact')" [routerLink]="['/demo/contact']" class="list-group-item">Interactive contact list</a>
            <a [class.active]="getLinkStyle('/demo/textbox')" [routerLink]="['/demo/textbox']" class="list-group-item">Bound Textbox</a>
            <a [class.active]="getLinkStyle('/demo/iodemo')" [routerLink]="['/demo/iodemo']" class="list-group-item">Input/Output</a>
       </div>

        <div class="col-md-9">
            <router-outlet></router-outlet>
        </div>
    </div>

</div>`
})

export class DemoPage {

    location:Location;

    constructor(location:Location) {
        this.location = location;
    }

    getLinkStyle(path) {
        return this.location.path().indexOf(path) > -1;
    }
}


