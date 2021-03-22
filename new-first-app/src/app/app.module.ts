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
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [Assignment4Component]
})
export class AppModule { }
