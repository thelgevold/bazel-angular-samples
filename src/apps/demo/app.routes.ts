import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {DemoPage} from './shared-components/demo-page/demo-page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/demo/countries',
    pathMatch: 'full'
  },
  {
    path: 'demo',
    
    component: DemoPage,
    children: [
      { path: 'spreadsheet', loadChildren: './src/apps/demo/spreadsheet.module#SpreadsheetModule'},
      { path: 'treeview', loadChildren: './src/apps/demo/tree-view.module#TreeViewModule'},
      { path: 'survey', loadChildren: './src/apps/demo/survey.module#SurveyModule'},
      { path: 'countries', loadChildren: './src/apps/demo/lazy-loaded-tree-view.module#LazyLoadedTreeViewModule'}
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
