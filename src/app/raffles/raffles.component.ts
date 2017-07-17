import { Component, OnInit } from '@angular/core';

import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-raffles',
  templateUrl: './raffles.component.html',
  styleUrls: ['./raffles.component.css'],
  providers: [RecipeService]
})
export class RafflesComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

}
