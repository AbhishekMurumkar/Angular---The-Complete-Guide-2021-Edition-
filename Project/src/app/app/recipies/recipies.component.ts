import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from '../myservices/recipe-service.service';
import { Recipe } from './recipe.modal';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers:[RecipeServiceService]
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
