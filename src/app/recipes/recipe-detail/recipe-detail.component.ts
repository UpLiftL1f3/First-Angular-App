import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  id: number;
  private _id: any;

  constructor(
    public recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      // this.selectedRecipe = this.recipeService.getRecipe(this.id);
      // this.selectedRecipe = this.recipeService.recipes[this.id];
    });
  }
  onAddToShoppingList() {
    console.log('click');
    console.log(this.selectedRecipe.ingredients);
    this.recipeService.addIngredientsToShoppingList(
      this.selectedRecipe.ingredients
    );
  }

  onEditRecipe() {
    this.router.navigate(['./edit'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this._id?.unsubscribe();
  }
}
