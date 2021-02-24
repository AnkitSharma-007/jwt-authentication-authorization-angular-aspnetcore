import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {

  userData: string;

  constructor(private userService: UserService) { }

  fetchUserData() {
    this.userService.getUserData().subscribe(
      (result: string) => {
        this.userData = result;
      }
    );
  }
}
