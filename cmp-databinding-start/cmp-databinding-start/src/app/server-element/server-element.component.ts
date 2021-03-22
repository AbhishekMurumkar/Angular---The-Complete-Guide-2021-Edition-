import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() element: {
    type: string;
    name: string;
    content: string;
  }
  @Input() name: string;
  @ViewChild('panelHeading', { static: true }) panelHeading: ElementRef;
  @ContentChild('elementBlock',{static:true}) elementBlock: ElementRef;

    constructor() {
      console.log("CONSTRUCTOR CALLED");
    }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnchanges called", changes);
  }

  ngOnInit(): void {
    console.log("NG_ON_INIT CALLED");
    console.log("Text Content From ViewChild1: ", this.panelHeading.nativeElement.textContent);
    console.log("Text Content From ContentChild1: ",this.elementBlock.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log("NG DO CHECK CALLED");
  }

  ngAfterContentInit() {
    console.log("NG CONTENT INIT CALLED");
  }

  ngAfterContentChecked() {
    console.log("NG CONTENT CHECKED");
  }

  ngAfterViewInit() {
    console.log("NG CONTENT INIT CALLED");
    console.log("Text Content From ViewChild1: ", this.panelHeading.nativeElement.textContent);
    console.log("Text Content From ContentChild2: ",this.elementBlock.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("NG CONTENT CHECKED");
  }

  ngOnDestroy() {
    console.log("NG ON DESTROY CALLED");
  }
}
