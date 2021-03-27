import { Component, OnInit } from '@angular/core';
import { Account } from "./Account";
import { Accounts } from './accounts.service'; // this is a root level service
import { LoggerService } from './logger.service';
// above line creates service at component level,
// we are saying so because it is initialized in providers property of current component
// this means newly created service object is passed to current component and to all of its child component automatically
@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css'],
  providers:[
    LoggerService
  ]
})

export class LoggerComponent implements OnInit {

  // accounts:Array<Account> = [
  //   new Account("A1","active"),
  //   new Account("A2","inactive"),
  //   new Account("A3","unknown")
  // ]

  // constructor(private logger:LoggerService) { }

  // ngOnInit(): void {
  // }

  // onAccountAdded(newAccount:Account){
  //   this.accounts.splice(0,0,newAccount);
  //   this.logger.logToConsole("New Account Created");
  // }

  accounts: Array<Account> = [];
  constructor(private accountsService:Accounts,private logger:LoggerService){}
  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }

  onAccountAdded(newAccount:Account){
    this.accountsService.addNewAccount(newAccount);
    this.logger.logToConsole("New Account Created");
  }
}
