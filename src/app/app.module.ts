import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {MfWorkspaceComponent} from './mf-workspace/mf-workspace.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    MfWorkspaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    MfWorkspaceComponent
  ],
  bootstrap: [MfWorkspaceComponent]
})
export class MfWorkspaceModule {
  constructor(private injector: Injector) {
    const mfWorkspace = createCustomElement(MfWorkspaceComponent, {injector});
    customElements.define('mf-workspace', mfWorkspace);
  }

}
