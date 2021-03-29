import { Component, Input, OnInit } from '@angular/core';
import { RecipeServiceService } from '../../myservices/recipe-service.service';
import { ShoppingServiceService } from '../../myservices/shopping-service.service';
import { Recipe } from '../recipe.modal';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  activeRecipe:Recipe;
  constructor(private rs:RecipeServiceService,private ss:ShoppingServiceService) { 
  }

  ngOnInit(): void {
    this.rs.recipeSelected.subscribe((recipe:Recipe)=>{console.log(recipe);this.activeRecipe=recipe})
  }

  addToSlist(){
    this.ss.addIngredients(this.activeRecipe.ingredients)
    alert("Added to Shopping list");
  }
}
