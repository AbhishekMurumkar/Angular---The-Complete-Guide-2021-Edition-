import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { ActivatedRouteSnapshot } from '@angular/router';
import { Recipe } from '../../recipe.modal';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe:Recipe;
  @Input() index:number;
 
  constructor() { }

  ngOnInit(): void { }

}
