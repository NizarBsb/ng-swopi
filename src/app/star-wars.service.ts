import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StarWarsService {

  /**
   * Swopi endpoint base URL.
   * @type {string}
   */
  readonly swopiUrl = 'https://swapi.co/api/';

  /**
   * Constructor.
   * @param {HttpClient} httpClient
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * Fetch films from the API.
   * @returns {Observable<Object>}
   */
  getFilms<FilmModel>() {
    return this.httpClient.get<FilmModel[]>(`${this.swopiUrl}films/`);
  }

  /**
   * Fetch people from the API.
   * @returns {Observable<Object>}
   */
  public getPeople<PeopleModel>() {
    return this.httpClient.get<PeopleModel[]>(`${this.swopiUrl}people/`);
  }

  /**
   * Fetch planets from the API.
   * @returns {Observable<Object>}
   */
  public getPlanets<PlanetModels>() {
    return this.httpClient.get<PlanetModels>(`${this.swopiUrl}planets/`);
  }

  /**
   * Fetch species from the API.
   * @returns {Observable<Object>}
   */
  public getSpecies<SpeciesModel>() {
    return this.httpClient.get<SpeciesModel>(`${this.swopiUrl}species/`);
  }

  /**
   * Fetch starships from the API.
   * @returns {Observable<Object>}
   */
  public getStarships<T>() {
    return this.httpClient.get<T>(`${this.swopiUrl}starships/`);
  }

  /**
   * Fetch vehicles from the API.
   * @returns {Observable<Object>}
   */
  public getVehicles<VehiclesModel>() {
    return this.httpClient.get<VehiclesModel>(`${this.swopiUrl}vehicles/`);
  }

}
