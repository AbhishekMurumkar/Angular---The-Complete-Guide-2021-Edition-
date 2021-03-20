import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
OnInit,
OnChanges,DoCheck,AfterContentInit, AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  @Input() element:{
    type:string;
    name:string;
    content:string;
  }
  @Input() name:string;

  constructor() { 
    console.log("CONSTRUCTOR CALLED");
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnchanges called",changes);
  }

  ngOnInit(): void {
    console.log("NG_ON_INIT CALLED");
  }

  ngDoCheck(){
    console.log("NG DO CHECK CALLED");
  }

  ngAfterContentInit(){
    console.log("NG CONTENT INIT CALLED");
  }

  ngAfterContentChecked(){
    console.log("NG CONTENT CHECKED");
  }

  ngAfterViewInit(){
    console.log("NG CONTENT INIT CALLED");
  }

  ngAfterViewChecked(){
    console.log("NG CONTENT CHECKED");
  }

  ngOnDestroy(){
    console.log("NG ON DESTROY CALLED");
  }
}
