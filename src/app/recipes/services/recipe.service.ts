import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  public selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }
}
