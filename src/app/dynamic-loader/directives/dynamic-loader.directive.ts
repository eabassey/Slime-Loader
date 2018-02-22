import {
  Directive,
  ViewContainerRef,
  ViewChild,
  HostListener
} from '@angular/core';
import { DynamicLoaderService } from '../services/dynamic-loader.service';



@Directive({
  selector: '[dynamicLoaderHost]'
})
export class DynamicLoaderDirective {

  private static _currentHost: ViewContainerRef;
  private static _incomingHost: ViewContainerRef;

  constructor(
    public vcr: ViewContainerRef,
    public loaderService: DynamicLoaderService
  ) {}

  setCurrentHost() {
    if (DynamicLoaderDirective._currentHost === undefined) {
      DynamicLoaderDirective._currentHost = this.vcr;
    } else {
      DynamicLoaderDirective._incomingHost = this.vcr;
      DynamicLoaderDirective._currentHost.clear();
      DynamicLoaderDirective._currentHost = DynamicLoaderDirective._incomingHost;
    }
    console.log('current', DynamicLoaderDirective._currentHost);
    console.log('incoming', DynamicLoaderDirective._incomingHost);
  }

  @HostListener('invoke', ['$event'])
  defineViewContainer(comp) {
    this.setCurrentHost();
    this.loaderService.loadComponent(comp, DynamicLoaderDirective._currentHost);
  }
}
