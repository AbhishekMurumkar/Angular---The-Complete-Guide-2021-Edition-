import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector   : 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls  : ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated    = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{blueprintName:string,blueprintContent:string}>();

  @ViewChild('elementName',{static:true}) elementName: ElementRef;
  // elementName = '';
  elementContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  // onAddServer() {
  
  // passing the local reference value via function parameter
  // onAddServer(elementName:HTMLInputElement) {
  //   console.log("From controller - "+elementName.value);
  //   // this.elementName = elementName.value;
  //   this.serverCreated.emit({serverName:elementName.value,serverContent:this.elementContent});
  //   // this.elementName="";
  //   this.elementContent="";
  // }

  // directly accessing the local reference value via ViewChild decorator
  onAddServer() {
    console.log(this.elementName);
    // this.elementName = elementName.value;
    this.serverCreated.emit({serverName:this.elementName.nativeElement.value,serverContent:this.elementContent});
    // this.elementName="";
    this.elementContent = "";
  }

  onAddBlueprint(elementName:HTMLInputElement) {
    // this.elementName = elementName.value;
    this.blueprintCreated.emit({blueprintName:this.elementName.nativeElement.value,blueprintContent:this.elementContent});
    // this.elementName="";
    this.elementContent = "";
  }
}
