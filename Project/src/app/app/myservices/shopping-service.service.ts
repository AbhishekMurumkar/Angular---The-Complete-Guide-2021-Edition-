import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.modal';


export class ShoppingServiceService {

  updateIngredinetsList = new EventEmitter<Array<Ingredient>>();
  private activeIngredient:Ingredient;
  private ingredients: Ingredient[] = [
    new Ingredient("ing1",30),
    new Ingredient("ing2",50)
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredients(ing:Ingredient[]){
    this.ingredients.push(...ing);
    this.updateIngredinetsList.emit(this.ingredients.slice())
  }
  setActiveIngredient(index:number){
    this.activeIngredient = this.ingredients[index];
    console.log("updated active ingredient");
    
  }

}
