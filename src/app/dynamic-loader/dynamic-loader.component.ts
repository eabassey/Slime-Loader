import { Component, Output, EventEmitter, ViewContainerRef } from '@angular/core';


@Component({
    selector: 'fs-dynamic-loader'
})
export class DynamicLoaderComponent {
    @Output() invoke = new EventEmitter<any>();

    constructor(private vcr: ViewContainerRef) {}

    load(component) {
        this.invoke.emit(component);
    }
}

