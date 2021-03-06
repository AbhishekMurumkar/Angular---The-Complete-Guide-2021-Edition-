import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './app/recipies/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './app/recipies/recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './app/recipies/recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './app/recipies/recipe-start/recipe-start.component';
import { RecipiesComponent } from './app/recipies/recipies.component';
import { ShoppingListComponent } from './app/shopping-list/shopping-list.component';
const routes: Routes = [
  {
    path: "shoppinglist",
    component:ShoppingListComponent
  },
  {
    path:"recipies",
    component:RecipiesComponent,
    children:
    [
      {
        path:"",
        component:RecipeStartComponent
      },
      {
        path:"new",
        component:RecipeEditComponent
      },
      {
        path:":id",
        component:RecipeDetailComponent
      },
      {
        path:":id/edit",
        component:RecipeEditComponent,
      }
    ]
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
