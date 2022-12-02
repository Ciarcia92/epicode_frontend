import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  authors: string[] = [];


  constructor(private userSevice: UsersService) { }

  ngOnInit(): void {
    this.authors = this.userSevice.getAuthors();
  }

}
