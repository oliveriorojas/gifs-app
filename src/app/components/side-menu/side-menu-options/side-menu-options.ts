import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface SideMenuOption {
  label: string;
  subLabel: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'side-menu-options',
  imports: [RouterLink],
  templateUrl: './side-menu-options.html',
})
export class SideMenuOptions {
  sideMenuOptions: SideMenuOption[] = [
    {
      label: 'Trending',
      subLabel: 'Tendencias',
      icon: "fa-solid fa-arrow-trend-up",
      route: '/trending'
    },
    {
      label: 'Search',
      subLabel: 'Buscador',
      icon: 'fa-solid fa-magnifying-glass',
      route: '/search'
    }
  ]
}
