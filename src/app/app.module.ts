import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {MfAppsComponent} from './mf-apps/mf-apps.component';
import {createCustomElement} from '@angular/elements';
import {AppsComponent} from './mf-apps/apps/apps.component';
import {AppDetailComponent} from './mf-apps/apps/app-detail/app-detail.component';

@NgModule({
  declarations: [
    MfAppsComponent,
    AppsComponent,
    AppDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    MfAppsComponent,
    AppsComponent,
    AppDetailComponent
  ],
  bootstrap: [MfAppsComponent]
})
export class MfAppsModule {
  constructor(private injector: Injector) {
    const mfWorkspace = createCustomElement(MfAppsComponent, {injector});
    customElements.define('mf-apps', mfWorkspace);
  }

}
