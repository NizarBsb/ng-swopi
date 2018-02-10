import { Component } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { FilmModel } from './film.model';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent {

  dataSource = new FilmDataSource(this.swService);

  displayedColumns = [
    'director',
    'episode_id',
    'opening_crawl',
    'producer',
    'release_date',
    'title',
    'url'
  ];

  /**
   * Constructor.
   * @param {StarWarsService} swService
   */
  constructor(private swService: StarWarsService) { }

}

export class FilmDataSource extends DataSource<any> {

  /**
   * Constructor.
   * @param {StarWarsService} swService
   */
  constructor(private swService: StarWarsService) {
    super();
  }

  connect(): Observable<FilmModel[]> {
    return this.swService.getFilms().map(
      data => data['results']
    );
  }

  disconnect() {}

}
