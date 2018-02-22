import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';


@Injectable()
export class DynamicLoaderService {
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver
    ) {}

    loadComponent(component: any, vcr: ViewContainerRef) {
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        vcr.clear();

        vcr.createComponent(factory);
    }

}


