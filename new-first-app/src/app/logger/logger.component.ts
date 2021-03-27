import { Component, OnInit } from '@angular/core';
import { Account } from "./Account";
import { Accounts } from './accounts.service';
import { LoggerService } from './logger.service';
@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css'],
  providers:[
    LoggerService,
    Accounts
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
