import {Component} from '@angular/core';

import {Location} from '@angular/common';

@Component({
    selector: 'demo-page',
    template: `<div class="container">

    <div class="jumbotron">
        <h1>Angular sample components</h1>
        <p>Current version: Angular 6.0.0 - Beta 2</p>
    </div>

    <div>
        <div class="list-group col-md-3">
            <a [class.active]="getLinkStyle('/demo/spreadsheet')" [routerLink]="['/demo/spreadsheet']" class="list-group-item">Virtualized Spreadsheet</a>
            <a [class.active]="getLinkStyle('/demo/countries')" [routerLink]="['/demo/countries']" class="list-group-item">Lazy Loaded Tree View</a>
            <a [class.active]="getLinkStyle('/demo/survey')" [routerLink]="['/demo/survey']" class="list-group-item">Dynamic Form</a>
            <a [class.active]="getLinkStyle('/demo/treeview')" [routerLink]="['/demo/treeview']" class="list-group-item">Recursive tree view</a>
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


