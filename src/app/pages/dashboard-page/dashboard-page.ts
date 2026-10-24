import { Component } from '@angular/core';
import { SideMenuHeader } from '../../components/side-menu-header/side-menu-header';
import { SideMenuOptions } from '../../components/side-menu-options/side-menu-options';

@Component({
  selector: 'app-dashboard-page',
  imports: [SideMenuHeader, SideMenuOptions],
  templateUrl: './dashboard-page.html',
})
export default class DashboardPage {

}
