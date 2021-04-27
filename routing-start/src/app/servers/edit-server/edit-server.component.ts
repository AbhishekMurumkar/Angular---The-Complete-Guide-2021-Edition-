import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { CanDeactivateGuard } from './can-deactivate.service';

@Component({
  selector   : 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls  : ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanDeactivateGuard {
  server: { id: number, name: string, status: string };
  serverName   = '';
  serverStatus = '';
  allowEdit    = false;
  changedSaved = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log("endPoint params",params);
      if (params.id != undefined) {
        this.server       = this.serversService.getServer(parseInt(params.id));
        this.serverName   = this.server.name;
        this.serverStatus = this.server.status;
      }
    });
    this.route.queryParams.subscribe((params: Params) => {
      console.log("endPoint query params",params);
      this.allowEdit = (params["allowEdit"] === "true")
    })
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    // here our changes have been saved.
    this.changedSaved = true;
    // routing to up one level of last loaded route.
    this.router.navigate(["../"],{relativeTo: this.route});
  }

  canDeactivate():Observable<boolean>|Promise<boolean>|boolean{
    if(!this.allowEdit){return true}
    if(
      (this.serverName!=this.server.name || this.serverStatus!=this.server.status) &&
       !this.changedSaved){
        return confirm("DO you want to discard changes?");
    }else{
      return true;
    }
  }
}
