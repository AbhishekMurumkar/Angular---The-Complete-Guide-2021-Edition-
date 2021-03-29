import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from "../recipies/recipe.modal";
import { Ingredient } from '../shared/ingredients.modal';


export class RecipeServiceService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipies: Recipe[] = [
    new Recipe("Burger","testing sample","https://www.viewhotels.jp/ryogoku/wp-content/uploads/sites/9/2020/03/test-img.jpg",[
      new Ingredient('buns',2),
      new Ingredient('patty',1),
      new Ingredient('onion',1)
    ]),
    new Recipe("Pizza","testing sample","https://www.viewhotels.jp/ryogoku/wp-content/uploads/sites/9/2020/03/test-img.jpg",[
      new Ingredient('pizzaBase',1),
      new Ingredient('capsicum',2),
      new Ingredient('cheese',1)
    ])
  ];
  constructor() { }
  
  setActiveRecipe(index:number){
    // this.activeRecipeIndex=index;
    let temp:Recipe = this.recipies.slice(index,index+1)[0];
    this.recipeSelected.emit(temp);
  }

  getRecipies(){
    return this.recipies.slice();
  }
}
