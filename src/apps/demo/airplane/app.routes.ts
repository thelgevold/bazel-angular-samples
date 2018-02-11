import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/team0',
    pathMatch: 'full'
  },
  { path: 'team0', loadChildren: './src/apps/demo/team0.module#Module_airplane_team0'},
  { path: 'team1', loadChildren: './src/apps/demo/team1.module#Module_airplane_team1'},
  { path: 'team2', loadChildren: './src/apps/demo/team2.module#Module_airplane_team2'},
  { path: 'team3', loadChildren: './src/apps/demo/team3.module#Module_airplane_team3'},
  { path: 'team4', loadChildren: './src/apps/demo/team4.module#Module_airplane_team4'},
  { path: 'team5', loadChildren: './src/apps/demo/team5.module#Module_airplane_team5'},
  { path: 'team6', loadChildren: './src/apps/demo/team6.module#Module_airplane_team6'},
  { path: 'team7', loadChildren: './src/apps/demo/team7.module#Module_airplane_team7'},
  { path: 'team9', loadChildren: './src/apps/demo/team9.module#Module_airplane_team9'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
