import { Component } from '@angular/core';
import { User } from './models/user/user';

@Component({
    selector: 'login',
    templateUrl: './pages/login/login.component.html',
})

export class AppComponent {
  user: User;

  constructor() {

  }
}
