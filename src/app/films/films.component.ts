import { Component } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { FilmModel } from './film.model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent {

  dataSource = new FilmDataSource(this.swService);

  displayedColumns = ['created', 'director', 'edited', 'episode_id'];

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
    return this.swService.getFilms()
  }

  disconnect() {}

}
