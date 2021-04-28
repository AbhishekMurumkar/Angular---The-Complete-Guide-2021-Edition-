import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
  ]
})
export class AppComponent {
  // this is used to load a default view without using routes
  // currentView:string='recipe'
  // title:string = 'Project';
  // navigate(currentView:string){
  //   this.currentView = currentView;
  // }
}
