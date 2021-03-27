import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Account } from '../Account';
import { Accounts } from '../accounts.service';
import { LoggerService } from "../logger.service";

@Component({
  selector: 'app-logger-list',
  templateUrl: './logger-list.component.html',
  styleUrls: ['./logger-list.component.css'],
  providers:[
    LoggerService
  ]
})
export class LoggerListComponent implements OnInit {

  @Output('updateAccount') updateAccount=new EventEmitter<Account>();
  @Input('loggerList') loggerList:Array<Account>;
  // loggingService = new LoggerService(); this should not be done

  statusList:Array<string>=[
    'active',
    'inactive',
    'unknown'
  ];


  constructor( private accountsService:Accounts,private loggingService:LoggerService) { }

  ngOnInit(): void {
  }

  setNewStatus(acc:number,status:string){
    // console.log(acc,status);
    this.loggingService.logToConsole("Array :"+JSON.stringify(acc)+", New Status:"+status);
    // acc.updateStatus(status);
    this.accountsService.updateAccountStatus(acc,status);
  }
}
