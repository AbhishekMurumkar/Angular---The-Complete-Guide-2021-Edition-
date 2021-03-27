import { EventEmitter, Injectable } from '@angular/core';
import { EvenComponent } from '../assignment4/even/even.component';
import { Account } from './Account';
import {LoggerService} from "./logger.service";

@Injectable({
  providedIn:"root"
})
export class Accounts {
  constructor(private logger:LoggerService){}
  accounts: Array<Account> = [
    new Account('A1', 'active'),
    new Account('A2', 'inactive'),
    new Account('A3', 'unknown'),
  ];


  statusUpdated= new EventEmitter<string>();

  addNewAccount(acc: Account) {
    this.accounts.splice(0, 0, acc);
    this.logger.logToConsole("Added New Account:"+JSON.stringify(acc));
  }
  deleteAccount(acc: number){
      let temp=this.accounts.splice(0,acc);
      this.logger.logToConsole("Deleted Account: "+JSON.stringify(temp));
  }
  updateAccountStatus(index:number,status:string){
    this.accounts[index].updateStatus(status);
    this.logger.logToConsole("Completed Status Updation of account: "+JSON.stringify(this.accounts[index])+" to: "+status)
    //whenever we updated any accounts status we are emitting an event
    this.statusUpdated.emit(status);
  }
}
