import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeServiceService } from '../../myservices/recipe-service.service';
import { Recipe } from '../recipe.modal';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  activeRecipe:Recipe;
  constructor(private rs:RecipeServiceService) { 
  }

  ngOnInit(): void {
    this.rs.recipeSelected.subscribe(recipe=>this.activeRecipe=recipe)
  }

}
