import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  activeRecipe;

  constructor() {}

  ngOnInit(): void {}

  setActive(activeRecipeData: {
    recipeName: string;
    recipeDescription: string;
    recipeImagePath: string;
  }) {
    console.log('setActive: ', activeRecipeData);
    // WE  didn't assign active recipe to anything
    this.activeRecipe = {
      name: activeRecipeData.recipeName,
      description: activeRecipeData.recipeDescription,
      imagePath: activeRecipeData.recipeImagePath,
    };
  }
}
