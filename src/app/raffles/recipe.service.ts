import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../users/shopping-list.service';



@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Ipod 1st Gen', 'Talk about nostalgia', './assets/ipoc.jpeg', [
      new Ingredient('Billy', 'Billies'),
      new Ingredient('Larz', 'BigLarz'),
    ]),
    new Recipe('HDMI 1080 Projector', 'Great HDMI for any device', '../assets/projector.jpeg', [
      new Ingredient('Bonnie', 'Bonnie@gmail.com'),
      new Ingredient('Lenny', 'SmallLenny@gmail.com'),
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
