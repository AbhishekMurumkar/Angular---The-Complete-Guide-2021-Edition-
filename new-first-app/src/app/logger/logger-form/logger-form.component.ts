import { Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Account } from '../Account';

@Component({
  selector: 'app-logger-form',
  templateUrl: './logger-form.component.html',
  styleUrls: ['./logger-form.component.css'],
  providers:[
  ]
})
export class LoggerFormComponent implements OnInit {

  @ViewChild('name',{static:true}) name: ElementRef;
  status:string="active";

  @Output() addAccount=new EventEmitter<Account>();

  constructor() { }

  ngOnInit(): void {
  }

  emit(){
    let name = this.name.nativeElement.value;
    let status = this.status;
    let newAcc = new Account(name,status);
    // console.log(newAcc,status);
    // this.logger.logToConsole("New Account Initialization: "+JSON.stringify(newAcc)+", status: "+status);
    this.addAccount.emit(newAcc);
    this.name.nativeElement.value="";
    this.status="active";
  }
}
