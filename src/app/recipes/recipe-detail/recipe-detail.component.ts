import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() activeRecipe: {
    name: string;
    description: string;
    imagePath: string;
  };
  constructor() {}

  ngOnInit(): void {}
}
