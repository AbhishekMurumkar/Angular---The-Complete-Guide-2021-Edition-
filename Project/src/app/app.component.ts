import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentView:string='recipe'
  title:string = 'Project';
  navigate(currentView:string){
    this.currentView = currentView;
  }
}
