import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LibraryModule } from '../library';
import { FetchDataComponent, HomeComponent, LayoutComponent } from './components';
import { routes } from './main.routes';

export const MODULE_DECLARATIONS: any[] = [
  LayoutComponent,
  HomeComponent,
  FetchDataComponent,
];
export const MODULE_IMPORTS: any[] = [
  RouterModule.forRoot(routes),
  BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  LibraryModule,
]
export const MODULE_BOOTSTRAPS: any[] = [
  LayoutComponent,
]
