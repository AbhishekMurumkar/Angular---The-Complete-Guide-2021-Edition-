import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers =false;
  serverName = null;
  servers=['test server1','test server2'];

  constructor() { 
    setTimeout(()=>{
      this.allowNewServers=true
    },5000);
  }

  ngOnInit(): void {
  }

  createNewServer(){
    this.servers.push(this.serverName);
    this.serverName='';
  }
  updateServerName(event){
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log("new name:"+this.serverName);
  }
}
