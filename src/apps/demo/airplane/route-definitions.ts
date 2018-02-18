export const ROUTE_DEFINITIONS = [
  {
    path: '',
    redirectTo: '/team0',
    pathMatch: 'full'
  },

  // TODO: This is currently pointing to the bundles created by Rollup (bundles.es6)
  // The expection is likely to point to the original location of each ngModule 
  { path: 'team0', loadChildren: './src/apps/demo/bundles.es6/team0.module#Module_airplane_team0'},
  { path: 'team1', loadChildren: './src/apps/demo/bundles.es6/team1.module#Module_airplane_team1'},
  { path: 'team2', loadChildren: './src/apps/demo/bundles.es6/team2.module#Module_airplane_team2'},
  { path: 'team3', loadChildren: './src/apps/demo/bundles.es6/team3.module#Module_airplane_team3'},
  { path: 'team4', loadChildren: './src/apps/demo/bundles.es6/team4.module#Module_airplane_team4'},
  { path: 'team5', loadChildren: './src/apps/demo/bundles.es6/team5.module#Module_airplane_team5'},
  { path: 'team6', loadChildren: './src/apps/demo/bundles.es6/team6.module#Module_airplane_team6'},
  { path: 'team7', loadChildren: './src/apps/demo/bundles.es6/team7.module#Module_airplane_team7'},
  { path: 'team8', loadChildren: './src/apps/demo/bundles.es6/team8.module#Module_airplane_team8'},
  { path: 'team9', loadChildren: './src/apps/demo/bundles.es6/team9.module#Module_airplane_team9'}
];