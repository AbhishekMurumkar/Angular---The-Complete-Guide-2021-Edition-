import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements= [
    {type:'server',name:'test',content:'server content'}
  ];

  onServerAdded(serverData:{serverName:string,serverContent:string}) {
    this.onElementAdded('server',serverData.serverName,serverData.serverContent);
  }

  onBlueprintAdded(blueprintData:{blueprintName:string,blueprintContent:string}) {
    this.onElementAdded('blueprint',blueprintData.blueprintName,blueprintData.blueprintContent);
  }

  onElementAdded(type:string,name:string,content:string){
    this.serverElements.push({
      type:type,
      name:name,
      content:content
    })
  }

  changeFirstName(){
    this.serverElements[0].name="Changed name"
  }

  deleteFirstElement(){
    this.serverElements.splice(0,1);
  }
}
