import {Component} from '@angular/core';

@Component(
  {
    selector: 'demo-app',
    template: `
        <h1>Airplane</h1>

        <div style="float:left;margin-right: 30px;">
          <div><a [routerLink]="['/team0']">Team0</a></div>
          <div><a [routerLink]="['/team1']">Team1</a></div>
          <div><a [routerLink]="['/team2']">Team2</a></div>
          <div><a [routerLink]="['/team3']">Team3</a></div>
          <div><a [routerLink]="['/team4']">Team4</a></div>
          <div><a [routerLink]="['/team5']">Team5</a></div>
          <div><a [routerLink]="['/team6']">Team6</a></div>
          <div><a [routerLink]="['/team7']">Team7</a></div>
          <div><a [routerLink]="['/team9']">Team9</a></div>
        </div>

        <router-outlet></router-outlet>`
})
export class AppComponent {}
