import { Component, input } from '@angular/core';

@Component({
  selector: 'gifs-item',
  imports: [],
  templateUrl: './gifs-item.html',
})
export class GifsItem {
  gifsItem = input.required<string>();
}
