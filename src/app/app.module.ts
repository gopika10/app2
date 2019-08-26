import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {MfWorkspaceComponent} from './mf-workspace/mf-workspace.component';
import {createCustomElement} from '@angular/elements';
import {AppsComponent} from './mf-workspace/apps/apps.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppDetailComponent} from './mf-workspace/apps/app-detail/app-detail.component';

@NgModule({
  declarations: [
    MfWorkspaceComponent,
    AppsComponent,
    AppDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  exports: [
    MfWorkspaceComponent,
    AppsComponent,
    AppDetailComponent
  ],
  bootstrap: [MfWorkspaceComponent]
})
export class MfWorkspaceModule {
  constructor(private injector: Injector) {
    const mfWorkspace = createCustomElement(MfWorkspaceComponent, {injector});
    customElements.define('mf-workspace', mfWorkspace);
  }

}
