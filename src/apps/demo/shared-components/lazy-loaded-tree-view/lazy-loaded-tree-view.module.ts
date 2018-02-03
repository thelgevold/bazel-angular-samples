import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

import {CountryDemo} from './country-demo';
import {LazyTreeView} from './tree-view';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [SharedModule,
            HttpModule,
            RouterModule.forChild([{path: '', component: CountryDemo}])
  ],  
  declarations: [CountryDemo, LazyTreeView]    
})
export class LazyLoadedTreeViewModule {}