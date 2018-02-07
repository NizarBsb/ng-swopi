import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  /**
   * Constructor.
   * @param {StarWarsService} swService
   */
  constructor(private swService: StarWarsService) { }

  ngOnInit() {
    this.fetchPeople();
  }

  /**
   * Called once the view is initialized
   * to fetch the people.
   */
  fetchPeople() {
    this.swService.getPeople().subscribe((response) => {
    });
  }
}
