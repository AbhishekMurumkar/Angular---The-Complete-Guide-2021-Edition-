import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit {

  myTimer;
  myCounter: number = 0;
  myElements: Array<Object> = [];
  isCounterRunning: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.isCounterRunning = true;
    this.myTimer = setInterval(() => {
      this.myCounter++;
      this.myElements.push(this.myCounter);
    }, 1000)
  }
  pause() {
    this.isCounterRunning = false;
    clearInterval(this.myTimer);
  }
  stop() {
    clearInterval(this.myTimer);
    this.myElements = [];
    this.myCounter = 0;
  }
  restart() {
    this.stop();
    this.start();
  }
}
