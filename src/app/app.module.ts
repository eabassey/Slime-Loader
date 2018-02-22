import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicLoaderModule } from './dynamic-loader/dynamic-loader.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
