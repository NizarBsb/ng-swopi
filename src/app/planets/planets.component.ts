import { Component } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { PlanetModel } from './planet.model';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent {

  dataSource = new PlanetDataSource(this.swService);

  displayedColumns = [
    'climate',
    'created',
    'diameter',
    'edited',
    'gravity',
    'name',
    'orbital_period',
    'population',
    'rotation_period',
    'surface_water',
    'terrain',
    'url'
  ];

  /**
   * Constructor.
   * @param {StarWarsService} swService
   */
  constructor(private swService: StarWarsService) { }

}

export class PlanetDataSource extends DataSource<any> {

  /**
   * Constructor.
   * @param {StarWarsService} swService
   */
  constructor(private swService: StarWarsService) {
    super();
  }

  connect(): Observable<PlanetModel[]> {
    return this.swService.getPlanets()
  }

  disconnect() {}

}
