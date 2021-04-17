import { Route } from '@angular/router';
import { FetchDataComponent, HomeComponent } from './components';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'fetch-data',
    component: FetchDataComponent
  },
];
