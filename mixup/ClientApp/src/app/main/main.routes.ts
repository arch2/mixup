import { Route } from '@angular/router';
import { FetchDataComponent, HomeComponent } from './components';

export const routes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'fetch-data',
        component: FetchDataComponent
    },
    // {
    //     path: 'sample',
    //     loadChildren: '../sample/sample.module#SampleModule'
    // },
];