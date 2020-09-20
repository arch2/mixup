import { NgModule } from '@angular/core';
import { MODULE_BOOTSTRAPS, MODULE_DECLARATIONS, MODULE_IMPORTS } from './main.common';

@NgModule({
  declarations: [
    ...MODULE_DECLARATIONS,
  ],
  imports: [
    ...MODULE_IMPORTS
  ],
  bootstrap: [
    ...MODULE_BOOTSTRAPS
  ]

})
export class MainModule { }