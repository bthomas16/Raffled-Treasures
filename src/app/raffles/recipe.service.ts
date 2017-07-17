import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../users/shopping-list.service';



@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Ipod 1st Gen', 'Talk about nostalgia', 'https://s-media-cache-ak0.pinimg.com/736x/d2/6c/51/d26c511a38b62ec9a2faf464b798e755.jpg', [
      new Ingredient('Meat', 1),
      new Ingredient('Fries',20),
    ]),
    new Recipe('Bad Food', 'This is Bad Food', 'https://s-media-cache-ak0.pinimg.com/736x/d2/6c/51/d26c511a38b62ec9a2faf464b798e755.jpg', [
      new Ingredient('Buns', 8),
      new Ingredient('Bigger Buns',208),
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice()
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
