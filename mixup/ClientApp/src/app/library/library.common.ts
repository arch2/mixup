import { CommonModule } from '@angular/common';
import { APP_INITIALIZER } from '@angular/core';
import { ConfigService } from './services';

export const configFactory = (configService: ConfigService) => {
    return () => configService.loadConfig();
}
export const DECLARATIONS: any[] = [

];
export const IMPORTS: any[] = [
    CommonModule
]
export const EXPORTS: any[] = [

]
export const PROVIDERS: any[] = [
    {
        provide: APP_INITIALIZER,
        useFactory: configFactory,
        deps: [ConfigService],
        multi: true,
    }
]