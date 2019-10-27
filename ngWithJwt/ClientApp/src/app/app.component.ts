import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(private authService: AuthService) {
    if (localStorage.getItem('authToken')) {
      this.authService.setUserDetails();
    }
  }
}
