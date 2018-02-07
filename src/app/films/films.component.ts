import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  /**
   * Constructor.
   * @param {StarWarsService} swService
   */
  constructor(private swService: StarWarsService) { }

  ngOnInit() {
    this.fetchFilms();
  }

  /**
   * Called once the view is initialized
   * to fetch the films.
   */
  private fetchFilms() {
    this.swService.getFilms().subscribe((response) => {
    });
  }

}
