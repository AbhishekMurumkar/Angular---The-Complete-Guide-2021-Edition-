import { Component, EventEmitter, Input, AfterContentChecked, OnInit, Output } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit,AfterContentChecked {
  // @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  // onSetToInactive(id: number) {
  //   this.userSetToInactive.emit(id);
  // }
  users: String[];
  totalConversions:number = -1;

  constructor(private usersService:UsersService,private counterService:CounterService){}
  ngOnInit(){
    console.log(this.counterService);
    this.users = this.usersService.activeUsers;
    this.totalConversions = this.counterService.getActiveCount();
  }
  ngAfterContentChecked(){
    this.totalConversions = this.counterService.getActiveCount();
  }
  
  onSetToInactive(index:number){
    this.usersService.changeToInactive(index);
  }
}
