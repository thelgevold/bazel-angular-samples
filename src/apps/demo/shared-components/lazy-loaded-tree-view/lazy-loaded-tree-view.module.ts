import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

import {CountryDemo} from './country-demo';
import {LazyTreeView} from './tree-view';

@NgModule({
  imports: [SharedModule,
            RouterModule.forChild([{path: '', component: CountryDemo}])
  ],  
  declarations: [CountryDemo, LazyTreeView]    
})
export class LazyLoadedTreeViewModule {}