import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private authSrv: AuthService) { }

  ngOnInit(): void {
  }

   userJson: any = localStorage.getItem('user');


   user = JSON.parse(this.userJson);

   log() {
    console.log(this.user.user);
   }
}
