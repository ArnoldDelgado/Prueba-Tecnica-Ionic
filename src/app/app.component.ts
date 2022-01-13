import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/', icon: 'home' },
    { title: 'Login', url: '/login', icon: 'person' },
    { title: 'Platillos', url: '/platillos', icon: 'fast-food' }
  ];
  constructor() {}
}
