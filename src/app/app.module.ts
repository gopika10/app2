import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppTwoComponent} from './app-two/app-two.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    AppTwoComponent
  ],
  bootstrap: [AppTwoComponent]
})
export class AppTwoModule {
  constructor(private injector: Injector) {
    const app2 = createCustomElement(AppTwoComponent, {injector});
    customElements.define('app-two', app2);
  }

}
