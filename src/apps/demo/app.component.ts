import {Component} from '@angular/core';

import {Location} from '@angular/common';

@Component(
  {
    selector: 'demo-app',
    template: `<div class="container">
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div>
                <ul class="nav navbar-nav">
                    <li><a href="http://www.syntaxsuccess.com" class="link">Home</a></li>
                    <li [class.active]="getLinkStyle('/demo')"><a [routerLink]="['/demo/spreadsheet']" class="link">Demos</a></li>
                </ul>
            </div>
        </div>
    </nav>
</div>

<div class="container">
    <router-outlet name="msg"></router-outlet>
</div>
<router-outlet></router-outlet>
`
  })


export class AppComponent {

  constructor(public location: Location) {}

  getLinkStyle(path) {

    if(path === this.location.path()) {
      return true;
    }

    else if(path.length > 0) {
      return this.location.path().indexOf(path) > -1;
    }
  }
}
