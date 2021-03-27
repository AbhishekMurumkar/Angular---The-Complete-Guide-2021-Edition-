import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Account } from '../Account';
import { Accounts } from '../accounts.service';


@Component({
  selector: 'app-logger-list',
  templateUrl: './logger-list.component.html',
  styleUrls: ['./logger-list.component.css'],
  providers:[
  ]
})
export class LoggerListComponent implements OnInit {

  @Output('updateAccount') updateAccount=new EventEmitter<Account>();
  // @Input('loggerList') loggerList:Array<Account>;
  // loggingService = new LoggerService(); this should not be done
  loggerList : Array<Account>;
  statusList:Array<string>=[
    'active',
    'inactive',
    'unknown'
  ];


  constructor( private accountsService:Accounts) { }

  ngOnInit(): void {
    this.loggerList = this.accountsService.accounts;  
  }

  setNewStatus(acc:number,status:string){
    // console.log(acc,status);
    // this.loggingService.logToConsole("Array :"+JSON.stringify(acc)+", New Status:"+status);
    // acc.updateStatus(status);
    this.accountsService.updateAccountStatus(acc,status);
  }
}
