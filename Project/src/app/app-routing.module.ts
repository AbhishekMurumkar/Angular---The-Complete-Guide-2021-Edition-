import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './app/recipies/recipe-detail/recipe-detail.component';
import { RecipiesComponent } from './app/recipies/recipies.component';
import { ShoppingListComponent } from './app/shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path: "shoppinglist",
    component:ShoppingListComponent
  },
  {
    path:"recipies",
    component:RecipiesComponent
  },
  {
    path:"recipies/:id",
    component:RecipeDetailComponent
  },
  {
    path: "",
    redirectTo:"/recipies",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
