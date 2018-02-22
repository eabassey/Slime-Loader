import { NgModule } from '@angular/core';
import { DynamicLoaderService } from './services/dynamic-loader.service';
import { DynamicLoaderDirective } from './directives/dynamic-loader.directive';
import { DynamicLoaderComponent } from './dynamic-loader.component';


@NgModule({
    declarations: [
        DynamicLoaderComponent,
        DynamicLoaderDirective
    ],
    providers: [
        DynamicLoaderService
    ],
    exports: [
        DynamicLoaderComponent,
        DynamicLoaderDirective
    ]
})
export class LoaderModule {}

