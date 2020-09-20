import { ServerModule } from "@angular/platform-server"
import { ModuleMapLoaderModule } from "@nguniversal/module-map-ngfactory-loader"
import { LayoutComponent, MainModule } from "../main"

export const MODULE_IMPORTS: any[] = [
    MainModule,
    ServerModule,
    ModuleMapLoaderModule
]

export const MODULE_BOOTSTRAP: any[] = [
    LayoutComponent
]