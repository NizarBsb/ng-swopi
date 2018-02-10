import { Component } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { VehiclesModel } from './vehicles.model';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  dataSource = new VehiclesDataSource(this.swService);

  displayedColumns = [
    'cargo_capacity',
    'consumables',
    'cost_in_credits',
    'crew',
    'length',
    'manufacturer',
    'pilots',
    'url',
    'vehicle_class'
  ];

  /**
   * Constructor.
   * @param {StarWarsService} swService
   */
  constructor(private swService: StarWarsService) { }

}

export class VehiclesDataSource extends DataSource<any> {

  /**
   * Constructor.
   * @param {StarWarsService} swService
   */
  constructor(private swService: StarWarsService) {
    super();
  }

  connect(): Observable<VehiclesModel[]> {
    return this.swService.getVehicles()
  }

  disconnect() {}

}
