import { Component, input } from '@angular/core';
import { Gif } from '../../../interfaces/gif';

@Component({
  selector: 'gifs-item',
  imports: [],
  templateUrl: './gifs-item.html',
})
export class GifsItem {
  gifsItem = input.required<String>();
}
