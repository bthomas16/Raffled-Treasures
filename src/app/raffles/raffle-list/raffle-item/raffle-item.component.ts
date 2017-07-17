import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-raffle-item',
  templateUrl: './raffle-item.component.html',
  styleUrls: ['./raffle-item.component.css']
})
export class RaffleItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;


  ngOnInit() {
  }
}
