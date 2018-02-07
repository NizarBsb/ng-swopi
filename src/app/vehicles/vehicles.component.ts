import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  /**
   * Constructor.
   * @param {StarWarsService} swService
   */
  constructor(private swService: StarWarsService) { }

  ngOnInit() {
    this.fetchVehicles();
  }

  /**
   * Called once the view is initialized
   * to fetch the vehicles.
   */
  fetchVehicles() {
    this.swService.getVehicles().subscribe((response) => {
    })
  }

}
