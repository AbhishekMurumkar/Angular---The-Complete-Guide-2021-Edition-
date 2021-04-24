import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        console.log("p",params);
        if(params["id"]!=undefined)
        {
          let id = parseInt( params["id"] );
          this.server = this.serversService.getServer(id);
        }
      }
    )
    // this.server = this.serversService.getServer(1);
  }

  onEdit(){
    // this.router.navigate(["/servers",this.server.id,'edit']) // with accurate path from /
    this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:"preserve"})
  }
}
