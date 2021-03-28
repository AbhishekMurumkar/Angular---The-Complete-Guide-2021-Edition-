import { AfterContentChecked, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit,AfterContentChecked {
  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  // onSetToActive(id: number) {
  //   this.userSetToActive.emit(id);
  // }
  users:Array<String>;
  totalConversions:number;

  constructor(private usersService:UsersService,private counterService:CounterService){}
  ngOnInit(){
    this.users = this.usersService.inactiveUsers;
    this.totalConversions = this.counterService.getInactiveCount();
  }
  ngAfterContentChecked(){
    this.totalConversions=this.counterService.getInactiveCount();
  }
  onSetToActive(id:number){
    this.usersService.changeToActive(id);
  }
}
