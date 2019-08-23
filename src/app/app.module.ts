import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {App2Component} from './app2/app2.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    App2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [App2Component]
})
export class AppModule {
  constructor(private injector: Injector) {
    const app2 = createCustomElement(App2Component, {injector});
    customElements.define('app2', app2);
  }

}
