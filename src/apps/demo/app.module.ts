import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';

import {routing} from './app.routes';

@NgModule({
  imports: [BrowserModule,
            routing
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
