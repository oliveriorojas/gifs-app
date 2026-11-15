import { Component, inject } from '@angular/core';
import { GifsListItems } from '../../components/gifs-list-items/gifs-list-items';
import { GifService } from '../../services/gifs';



@Component({
  selector: 'app-trending-page',
  imports: [GifsListItems],
  templateUrl: './trending-page.html',
})
export default class TrendingPage {

  gifService = inject(GifService);
}
