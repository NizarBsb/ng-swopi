import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navLinks: any[];

  /**
   * Constructor.
   */
  constructor() {
    this.navLinks = [
      { path: 'films', label: 'Films' },
      { path: 'people', label: 'People' },
      { path: 'planets', label: 'Planets' },
      { path: 'species', label: 'Species' },
      { path: 'starships', label: 'Starships' },
      { path: 'vehicles', label: 'Vehicles' }
    ];
  }

}
