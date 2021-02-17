import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{blueprintName:string,blueprintContent:string}>();

  elementName = '';
  elementContent = '';

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    this.serverCreated.emit({serverName:this.elementName,serverContent:this.elementContent});
    this.elementName="";
    this.elementContent="";
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({blueprintName:this.elementName,blueprintContent:this.elementContent});
    this.elementName="";
    this.elementContent="";
  }
}
