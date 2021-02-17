import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("ing1",30),
    new Ingredient("ing2",50)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
