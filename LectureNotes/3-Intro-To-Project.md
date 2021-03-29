# Plan

Feature - service
![](2021-02-14-09-37-19.png)
![](2021-03-28-19-28-17.png)

## Setting Up Project
1. add bootstrap to project via npm and add it to angular.json
2. Creating Components
   1. Header -> inside app , then add ```<app-header></app-header>``` in first line of app.component.ts
   2. Recipies -> inside app
   3. RecipeList -> inside app > recipe
   4. RecipeDetail -> inside app > recipe
   5. RecipeItem -> inside app > recipe > recipe-list
   6. ShoppingList -> inside app
   7. ShoppingEdit -> inside app > shopping-list
3. Header
4. Recipe List
   1. Make a proper structural for recipe,as it would be used in through out the project. this is called as modal.
   2. thus create a file ```recipe.modal.ts``` in recipies component's folder
5. ShoppingList : created Ingredients modal in app/shared folder as it can be used in both recipies and shopping list components

