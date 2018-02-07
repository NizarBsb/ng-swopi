import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  /**
   * Constructor.
   * @param {StarWarsService} swService
   */
  constructor(private swService: StarWarsService) { }

  ngOnInit() {
    this.fetchPlanets();
  }

  /**
   * Called once the view is initialized
   * to fetch the planets.
   */
  fetchPlanets() {
    this.swService.getPlanets().subscribe((response) => {
    });
  }
}
