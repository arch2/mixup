import { NgModule } from '@angular/core';
import { MODULE_BOOTSTRAP, MODULE_IMPORTS } from './server.common';
@NgModule({
  imports: [
    ...MODULE_IMPORTS
  ],
  bootstrap: [
    ...MODULE_BOOTSTRAP
  ]
})
export class ServerModule { }