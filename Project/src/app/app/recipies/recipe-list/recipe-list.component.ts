import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeServiceService } from '../../myservices/recipe-service.service';

import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  activeRecipeIndex:number;
  recipies:Recipe[];
  // recipies: Recipe[] = [
  //   new Recipe("Test1","testing sample","https://www.viewhotels.jp/ryogoku/wp-content/uploads/sites/9/2020/03/test-img.jpg"),
  //   new Recipe("Test2","testing sample","https://www.viewhotels.jp/ryogoku/wp-content/uploads/sites/9/2020/03/test-img.jpg")
  // ];
  // @Output() activeRecipe = new EventEmitter<Recipe>();

  constructor(private rs:RecipeServiceService) { }

  ngOnInit(): void {
    this.recipies = this.rs.getRecipies();
    this.activeRecipeIndex=this.activeRecipeIndex;
  }

  setActiveRecipe(index:number){
    // this.activeRecipeIndex = index;
    // // console.log("User click recipe no."+index,this.recipies[index]);
    // this.activeRecipe.emit(this.recipies[index]);
    this.rs.setActiveRecipe(index);
    this.activeRecipeIndex=index;
  }

}
