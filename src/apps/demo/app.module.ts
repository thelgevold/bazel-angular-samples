import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';

import {routing} from './app.routes';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  imports: [BrowserModule,
            routing
  ],
  declarations: [AppComponent],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {}
