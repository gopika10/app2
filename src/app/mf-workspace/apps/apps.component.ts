import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent {
  apps = [{
    appId: 1,
    name: 'App1',
    description: 'Lorem Ispsum'
  }, {
    appId: 2,
    name: 'App2',
    description: 'Lorem Ispsum'
  }, {
    appId: 3,
    name: 'App3',
    description: 'Lorem Ispsum'
  }, {
    appId: 4,
    name: 'App4',
    description: 'Lorem Ispsum'
  }, {
    appId: 5,
    name: 'App5',
    description: 'Lorem Ispsum'
  }];
}
