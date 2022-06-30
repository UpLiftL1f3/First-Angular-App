import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
// import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable()
export class RecipeService implements OnInit {
  // Properties
  public recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[];
  private _recipes: Recipe[] = [
    new Recipe(
      'Tasty n',
      'this is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [new Ingredient('meat', 1), new Ingredient('French Fries', 25)]
    ),
    new Recipe(
      'Big Fat Burger',
      'this is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Bun', 1),
        new Ingredient('meat', 1),
        new Ingredient('French Fries', 25),
      ]
    ),
  ];

  constructor(
    private slService: ShoppingListService,
    public db: AngularFireDatabase // private httpClient: HttpClient
  ) {
    this.getData();
  }

  getData() {
    this.db
      .list('recipes')
      .valueChanges()
      .subscribe((data: any) => {
        console.log('====> data', data);
        this.recipes = data;
      });
  }

  ngOnInit() {
    // this.httpClient.get(
    //   'https://recipeproject-b169c-default-rtdb.firebaseio.com/'
    // );
  }

  // Custom Methods
  getRecipes() {
    return this.recipes;
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
