import { EventEmitter } from '@angular/core';


export class UsersService {

  inactiveUsers: Array<String>=["Chris","Anna"];
  activeUsers:Array<String>=["Max","Manu"];
  constructor() { }

  activeConverter = new EventEmitter<any>();
  inActiveConverter = new EventEmitter<any>();

  private changeStatus(source: Array<String>, sourceIndex: number, dest: Array<String>){
    let temp = source.splice(sourceIndex,1)[0];
    dest.push(temp);
  }

  changeToInactive(index:number){
    this.changeStatus(this.activeUsers,index,this.inactiveUsers);
    this.inActiveConverter.emit();
  }
  changeToActive(index:number){
    this.changeStatus(this.inactiveUsers,index,this.activeUsers);
    this.activeConverter.emit();
  }
}
