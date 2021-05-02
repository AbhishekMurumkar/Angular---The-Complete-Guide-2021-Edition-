import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeServiceService } from '../../myservices/recipe-service.service';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe=null;
  constructor(private activeRoute:ActivatedRoute,private rs:RecipeServiceService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:Params)=>{
      console.log(params)
      this.recipe=this.rs.getRecipe(+params["id"]);
      console.log(this.recipe)
    })
  }

}
