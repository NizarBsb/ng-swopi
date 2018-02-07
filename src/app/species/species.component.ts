import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  /**
   * Constructor/
   * @param {StarWarsService} swService
   */
  constructor(private swService: StarWarsService) { }

  ngOnInit() {
    this.fetchSpecies();
  }

  /**
   * Called once the view is initialized
   * to fetch the species.
   */
  fetchSpecies() {
    this.swService.getSpecies().subscribe((response) => {});
  }
}
