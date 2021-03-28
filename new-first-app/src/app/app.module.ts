import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import {SuccessComponent} from "./assignment1/success/success.component";
import {WarnComponent} from "./assignment1/warn/warn.component";
import { Assignment4Component } from './assignment4/assignment4.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { EvenComponent } from './assignment4/even/even.component';
import { LoggerComponent } from './logger/logger.component';
import { LoggerFormComponent } from './logger/logger-form/logger-form.component';
import { LoggerListComponent } from './logger/logger-list/logger-list.component';
import { Accounts } from "./logger/accounts.service";
import { LoggerService } from './logger/logger.service';
import { Assignment5Component } from './assignment5/assignment5.component';
import { UsersService } from "./assignment5/myservices/users.service";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Assignment1Component,
    SuccessComponent,
    WarnComponent,
    Assignment4Component,
    OddComponent,
    EvenComponent,
    LoggerComponent,
    LoggerFormComponent,
    LoggerListComponent,
    Assignment5Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [Assignment5Component]
})
export class AppModule { }
