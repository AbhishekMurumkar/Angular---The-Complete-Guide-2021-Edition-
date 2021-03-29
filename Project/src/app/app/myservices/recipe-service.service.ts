import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from "../recipies/recipe.modal";


export class RecipeServiceService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipies: Recipe[] = [
    new Recipe("Test1","testing sample","https://www.viewhotels.jp/ryogoku/wp-content/uploads/sites/9/2020/03/test-img.jpg"),
    new Recipe("Test2","testing sample","https://www.viewhotels.jp/ryogoku/wp-content/uploads/sites/9/2020/03/test-img.jpg")
  ];
  constructor() { }
  
  setActiveRecipe(index:number){
    // this.activeRecipeIndex=index;
    this.recipeSelected.emit(this.recipies[index]);
  }

  getRecipies(){
    return this.recipies.slice();
  }
}
