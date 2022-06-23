import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  // needed to add the object within the EventEmitter to pass in all of the properties
  @Output() declaredActiveRecipe = new EventEmitter<{
    recipeName: string;
    recipeDescription: string;
    recipeImagePath: string;
  }>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe 1',
      'this is simply a test',
      'https://illinoispirg.org/sites/pirg/files/Healthy%20Food%205.jpg'
    ),
    new Recipe(
      'A Test Recipe 2',
      'this is simply a test',
      'https://illinoispirg.org/sites/pirg/files/Healthy%20Food%205.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  onSelected(recipe) {
    console.log('recipe selected for activeRecipe:', recipe);
    // Had to define the Events properties with the selected object's properties
    this.declaredActiveRecipe.emit({
      recipeName: recipe.name,
      recipeDescription: recipe.description,
      recipeImagePath: recipe.imagePath,
    });
  }
}
