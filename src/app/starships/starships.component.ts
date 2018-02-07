import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  /**
   * Constructor.
   * @param {StarWarsService} swService
   */
  constructor(private swService: StarWarsService) { }

  ngOnInit() {
    this.fetchStarships();
  }

  /**
   * Called once the view is initialized
   * to fetch the starships.
   */
  fetchStarships() {
    this.swService.getStarships().subscribe((response) => {
    });
  }
}
