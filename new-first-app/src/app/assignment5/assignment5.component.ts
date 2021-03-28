import { Component, OnInit } from '@angular/core';
import { User } from './myservices/User';
import { UsersService } from './myservices/users.service';

@Component({
  selector: 'app-assignment5',
  templateUrl: './assignment5.component.html',
  styleUrls: ['./assignment5.component.css']
})
export class Assignment5Component implements OnInit {

  users:Array<User>;
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.users;
  }

  updateStatus(index:number){
    console.log(index);
    this.usersService.changeStatus(index);
  }

}
