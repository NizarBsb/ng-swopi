import { Component } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { SpeciesModel } from './species.model';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent {

  dataSource = new SpeciesDataSource(this.swService);

  displayedColumns = [
    'average_height',
    'average_lifespan',
    'classification',
    'created',
    'designation',
    'edited',
    'eye_colors',
    'hair_colors',
    'homeworld',
    'language',
    'name',
    'skin_colors',
    'url'
  ];

  /**
   * Constructor.
   * @param {StarWarsService} swService
   */
  constructor(private swService: StarWarsService) { }

}

export class SpeciesDataSource extends DataSource<any> {

  /**
   * Constructor.
   * @param {StarWarsService} swService
   */
  constructor(private swService: StarWarsService) {
    super();
  }

  connect(): Observable<SpeciesModel[]> {
    return this.swService.getSpecies()
  }

  disconnect() {}

}
