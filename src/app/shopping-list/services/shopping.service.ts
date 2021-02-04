import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  public ingredientChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  public getIngredients = ()=>{
    return this.ingredients;
  }

  public addItem = (ingredient: Ingredient)=>{
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(true);
  }
}
