import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  newRecipe: Recipe = {
    ingredients: [],
  } as any;
  defaultIng: Ingredient = {
    name: '',
    amount: 1,
  };
  editIngredientMode = false;
  newIn: Ingredient = { ...this.defaultIng };
  editIngCopy: { name: string; amount: number };
  editingIndex: number;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      // this.selectedRecipe = this.recipeService.getRecipe(this.id);
      console.log(this.editMode);
    });
  }

  private initForm() {}

  submit() {
    console.log('newRecipe; :', this.newRecipe);
    this.recipeService.newRecipe(this.newRecipe);
  }

  addIng() {
    // const x = this.newIn;
    this.newRecipe.ingredients.push({ ...this.newIn });
    this.resetIng();
  }

  editIngredient() {
    //  this.newIn =
  }

  resetIng() {
    this.newIn = { ...this.defaultIng };
    this.editIngredientMode = false;
  }

  cancelIng() {
    this.newRecipe.ingredients[this.editingIndex] = { ...this.editIngCopy };
    this.resetIng();
  }

  editIng(i: number) {
    this.editingIndex = i;
    this.newIn = this.newRecipe.ingredients[i];
    this.editIngCopy = { ...this.newIn };
    this.editIngredientMode = true;
  }
}
