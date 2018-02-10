import { Component } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { StarshipsModel } from './starships.model';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent {

  dataSource = new StarshipsDataSource(this.swService);

  displayedColumns = [
    'MGLT',
    'cargo_capacity',
    'consumables',
    'crew',
    'hyperdrive_rating',
    'length',
    'manufacturer',
    'max_atmosphering_speed',
    'model',
    'name',
    'passengers',
    'pilots',
    'starship_class',
    'url'
  ];

  /**
   * Constructor.
   * @param {StarWarsService} swService
   */
  constructor(private swService: StarWarsService) { }

}

export class StarshipsDataSource extends DataSource<any> {

  /**
   * Constructor.
   * @param {StarWarsService} swService
   */
  constructor(private swService: StarWarsService) {
    super();
  }

  connect(): Observable<StarshipsModel[]> {
    return this.swService.getStarships().map(
      data => data['results']
    );
  }

  disconnect() {}

}
