import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';

import {routing} from './app.routes';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import {FeatureModules} from './feature.modules';

@NgModule({
  imports: [BrowserModule,
            routing,
            FeatureModules
  ],
  declarations: [AppComponent],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {}
