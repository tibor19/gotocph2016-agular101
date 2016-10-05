import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneComponent }     from './one.component';
import { AnotherComponent } from './another.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/name',
    pathMatch: 'full'
  },
  {
    path: 'name',
    component: OneComponent
  },
  {
    path: 'another',
    component: AnotherComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/