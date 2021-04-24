import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService: ServersService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      console.log(params);
      if(params.id!=undefined){
        this.server = this.serversService.getServer(parseInt(params.id));
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
      }
    });
    this.route.queryParams.subscribe((params:Params)=>{
      console.log(params);
      this.allowEdit=(params["allowEdit"]==="true")
    })
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
