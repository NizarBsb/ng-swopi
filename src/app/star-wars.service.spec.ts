import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StarWarsService } from './star-wars.service';

describe('StarWarsServiceTest', () => {

  let swService: StarWarsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ StarWarsService ]
    });

    swService = TestBed.get(StarWarsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('It should create Star Wars service', inject([StarWarsService], (service: StarWarsService) => {
    expect(service).toBeTruthy();
  }));

  it('It should perform a GET request to fetch all films successfully', () => {

    swService.getFilms().subscribe((data: any) => {
    });

    const req = httpMock.expectOne('https://swapi.co/api/films/', '/GET - all films');
    expect(req.request.method).toBe('GET');

    req.flush({
    });

    httpMock.verify();
  });

  it('It should perform a GET request to fetch all people successfully', () => {

    swService.getPeople().subscribe((data: any) => {
    });

    const req = httpMock.expectOne('https://swapi.co/api/people/', '/GET - all people');
    expect(req.request.method).toBe('GET');

    req.flush({
    });

    httpMock.verify();
  });

  it('It should perform a GET request to fetch all planets successfully', () => {

    swService.getPlanets().subscribe((data: any) => {
    });

    const req = httpMock.expectOne('https://swapi.co/api/planets/', '/GET - all planets');
    expect(req.request.method).toBe('GET');

    req.flush({
    });

    httpMock.verify();
  });

  it('It should perform a GET request to fetch all species successfully', () => {

    swService.getSpecies().subscribe((data: any) => {
    });

    const req = httpMock.expectOne('https://swapi.co/api/species/', '/GET - all species');
    expect(req.request.method).toBe('GET');

    req.flush({
    });

    httpMock.verify();
  });

  it('It should perform a GET request to fetch all starships successfully', () => {

    swService.getStarships().subscribe((data: any) => {
    });

    const req = httpMock.expectOne('https://swapi.co/api/starships/', '/GET - all starships');
    expect(req.request.method).toBe('GET');

    req.flush({
    });

    httpMock.verify();
  });

  it('It should perform a GET request to fetch all vehiles successfully', () => {

    swService.getVehicles().subscribe((data: any) => {
    });

    const req = httpMock.expectOne('https://swapi.co/api/vehicles/', '/GET - all vehicles');
    expect(req.request.method).toBe('GET');

    req.flush({
    });

    httpMock.verify();
  });

});
