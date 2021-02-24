import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  adminData: string;

  constructor(private userService: UserService) { }

  fetchAdminData() {
    this.userService.getAdminData().subscribe(
      (result: string) => {
        this.adminData = result;
      }
    );
  }

}
