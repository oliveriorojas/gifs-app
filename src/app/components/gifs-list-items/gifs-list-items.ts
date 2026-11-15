import { Component, input } from '@angular/core';
import { GifsItem } from './gifs-item/gifs-item';
import { Gif } from '../../interfaces/gif';

@Component({
  selector: 'gifs-list-items',
  imports: [GifsItem],
  templateUrl: './gifs-list-items.html',
})
export class GifsListItems {
  gifsListItems = input.required<Gif[]>();
}
