import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ROUTE_DEFINITIONS} from './route-definitions';

const routes: Routes = ROUTE_DEFINITIONS

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
