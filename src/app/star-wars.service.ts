import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  public getFilms<T>() {
    return this.httpClient.get<T>(`${this.swopiUrl}films/`);
  }

  /**
   * Fetch people from the API.
   * @returns {Observable<Object>}
   */
  public getPeople<T>() {
    return this.httpClient.get<T>(`${this.swopiUrl}people/`);
  }

  /**
   * Fetch planets from the API.
   * @returns {Observable<Object>}
   */
  public getPlanets<T>() {
    return this.httpClient.get<T>(`${this.swopiUrl}planets/`);
  }

  /**
   * Fetch species from the API.
   * @returns {Observable<Object>}
   */
  public getSpecies<T>() {
    return this.httpClient.get<T>(`${this.swopiUrl}species/`);
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
  public getVehicles<T>() {
    return this.httpClient.get<T>(`${this.swopiUrl}vehicles/`);
  }

}
