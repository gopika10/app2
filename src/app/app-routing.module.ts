import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppsComponent} from './mf-workspace/apps/apps.component';
import {AppDetailComponent} from './mf-workspace/apps/app-detail/app-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AppsComponent,
  },
  {
    path: 'apps',
    component: AppsComponent,
  },
  {
    path: 'apps/:appId',
    component: AppDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
