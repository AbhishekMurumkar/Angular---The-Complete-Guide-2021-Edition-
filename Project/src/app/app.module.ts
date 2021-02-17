import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app/header/header.component';
import { RecipiesComponent } from './app/recipies/recipies.component';
import { RecipeListComponent } from './app/recipies/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './app/recipies/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './app/recipies/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './app/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './app/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
