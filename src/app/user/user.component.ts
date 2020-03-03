import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Data, User } from '../data';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  users: User[];

  getUsers(): User[] {
    this.userService.getData().subscribe(data => {
      this.users = data.data;
    });

    return this.users;
  }

}
