import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentView:string='recipe';
  @Output() viewChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeView(param:string){
    this.currentView=param;
    this.viewChange.emit(param);
  }

}
