import { Component, OnInit } from '@angular/core';
import { ShoppingServiceService } from '../myservices/shopping-service.service';
import { Ingredient } from '../shared/ingredients.modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[]
})
export class ShoppingListComponent implements OnInit {

  // ingredients: Ingredient[] = [
  //   new Ingredient("ing1",30),
  //   new Ingredient("ing2",50)
  // ];

  ingredients: Ingredient[];
  
  constructor(private ss:ShoppingServiceService) { }
  
  ngOnInit(): void {
    this.ingredients=this.ss.getIngredients();
    this.ss.updateIngredinetsList.subscribe((ings:Ingredient[])=>{console.log(ings);this.ingredients=ings;})
  }
  
  setActiveIngredient(index:number){
    this.ss.setActiveIngredient(index);
  }
  
}
