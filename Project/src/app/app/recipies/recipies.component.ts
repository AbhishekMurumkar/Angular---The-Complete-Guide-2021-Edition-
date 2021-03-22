import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.modal';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {

  selectedRecipe:Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  // showRecipeDetails(currentRecipe:Recipe){
  //   this.selectedRecipe = currentRecipe;
  //   // console.log("selectedRecipe:",this.selectedRecipe);
  // }

}
