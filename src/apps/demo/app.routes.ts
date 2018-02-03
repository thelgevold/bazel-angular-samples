import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {DemoPage} from './shared-components/demo-page/demo-page';

import {TreeViewDemo} from './shared-components/tree-view/tree-view-demo';
import {GridDemo} from './shared-components/grid/grid-demo';
import {SurveyDemo} from './shared-components/survey/survey-demo';
import {CountryDemo} from './shared-components/lazy-loaded-tree-view/country-demo';

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
    
      { path: 'treeview', component: TreeViewDemo},
      { path: 'grid', component: GridDemo},
      { path: 'survey', component:SurveyDemo},
      { path: 'countries', component: CountryDemo}
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
