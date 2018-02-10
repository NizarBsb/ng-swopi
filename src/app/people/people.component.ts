import { Component } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { PeopleModel } from './people.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {

  dataSource = new PeopleDataSource(this.swService);

  displayedColumns = [
    'birth_year',
    'eye_color',
    'gender',
    'hair_color',
    'height',
    'homeworld',
    'mass',
    'name',
    'skin_color',
    'url'
  ];

  /**
   * Constructor.
   * @param {StarWarsService} swService
   */
  constructor(private swService: StarWarsService) { }

}

export class PeopleDataSource extends DataSource<any> {

  /**
   * Constructor.
   * @param {StarWarsService} swService
   */
  constructor(private swService: StarWarsService) {
    super();
  }

  connect(): Observable<PeopleModel[]> {
    return this.swService.getPeople()
  }

  disconnect() {}

}
