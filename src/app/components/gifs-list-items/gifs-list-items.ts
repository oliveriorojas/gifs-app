import { Component, input } from '@angular/core';
import { GifsItem } from './gifs-item/gifs-item';

@Component({
  selector: 'gifs-list-items',
  imports: [GifsItem],
  templateUrl: './gifs-list-items.html',
})
export class GifsListItems {
  gifsListItems = input.required<string[]>();
}
