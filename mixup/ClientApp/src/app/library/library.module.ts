import { NgModule } from '@angular/core';
import { DECLARATIONS, EXPORTS, IMPORTS, PROVIDERS } from './library.common';

@NgModule({
  declarations: [
    ...DECLARATIONS
  ],
  imports: [
    ...IMPORTS
  ],
  exports: [
    ...EXPORTS
  ],
  providers: [
    ...PROVIDERS
  ]
})
export class LibraryModule { }
