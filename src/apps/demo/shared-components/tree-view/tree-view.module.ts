import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

import {TreeViewDemo} from './tree-view-demo';
import {TreeView} from './tree-view';

@NgModule({
  imports: [SharedModule,
            RouterModule.forChild([{path: '', component: TreeViewDemo}])
  ],
  declarations: [TreeView, TreeViewDemo]    
})
export class TreeViewModule {}