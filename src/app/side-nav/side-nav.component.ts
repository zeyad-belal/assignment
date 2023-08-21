import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html'
})
export class SideNavComponent {
  dropdownStates: { [menu: string]: boolean } = {
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false
  };

  toggleDropdown(menu: string): void {
    for (const key in this.dropdownStates) {
      if (key === menu) {
        this.dropdownStates[key] = !this.dropdownStates[key];
      } else {
        this.dropdownStates[key] = false;
      }
    }
  }

  // Add getter methods for dropdown state checks
  get menu1Dropdown(): boolean {
    return this.dropdownStates['menu1'];
  }

  get menu2Dropdown(): boolean {
    return this.dropdownStates['menu2'];
  }

  get menu3Dropdown(): boolean {
    return this.dropdownStates['menu3'];
  }

  get menu4Dropdown(): boolean {
    return this.dropdownStates['menu4'];
  }
}
