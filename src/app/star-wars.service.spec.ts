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
      expect(data.director).toEqual('George Lucas');
      expect(data.episode_id).toEqual(4);
      expect(data.opening_crawl).toEqual('"It is a period of civil war.\n' +
        '↵Rebel spaceships, striking\n' +
        '↵from a hidden base, have won\n' +
        '↵their first victory against\n' +
        '↵the evil Galactic Empire.\n' +
        '↵\n' +
        '↵During the battle, Rebel\n' +
        '↵spies managed to steal secret\n' +
        '↵plans to the Empire\'s\n' +
        '↵ultimate weapon, the DEATH\n' +
        '↵STAR, an armored space\n' +
        '↵station with enough power\n' +
        '↵to destroy an entire planet.\n' +
        '↵\n' +
        '↵Pursued by the Empire\'s\n' +
        '↵sinister agents, Princess\n' +
        '↵Leia races home aboard her\n' +
        '↵starship, custodian of the\n' +
        '↵stolen plans that can save her\n' +
        '↵people and restore\n' +
        '↵freedom to the galaxy...."\n');
      expect(data.producer).toEqual('Gary Kurtz,Ricky McCallum');
      expect(data.release_date).toEqual('1977-05-25');
      expect(data.title).toEqual('A New Hope');
      expect(data.url).toEqual('http://swopi.com/api/');
    });


    const req = httpMock.expectOne('https://swapi.co/api/films/', '/GET - all films');
    expect(req.request.method).toBe('GET');

    req.flush({
      director: 'George Lucas',
      episode_id: 4,
      opening_crawl: '"It is a period of civil war.\n' +
      '↵Rebel spaceships, striking\n' +
      '↵from a hidden base, have won\n' +
      '↵their first victory against\n' +
      '↵the evil Galactic Empire.\n' +
      '↵\n' +
      '↵During the battle, Rebel\n' +
      '↵spies managed to steal secret\n' +
      '↵plans to the Empire\'s\n' +
      '↵ultimate weapon, the DEATH\n' +
      '↵STAR, an armored space\n' +
      '↵station with enough power\n' +
      '↵to destroy an entire planet.\n' +
      '↵\n' +
      '↵Pursued by the Empire\'s\n' +
      '↵sinister agents, Princess\n' +
      '↵Leia races home aboard her\n' +
      '↵starship, custodian of the\n' +
      '↵stolen plans that can save her\n' +
      '↵people and restore\n' +
      '↵freedom to the galaxy...."\n',
      producer: 'Gary Kurtz,Ricky McCallum',
      release_date: '1977-05-25',
      title: 'A New Hope',
      url: 'http://swopi.com/api/'
    });

    httpMock.verify();
  });

  it('It should perform a GET request to fetch all people successfully', () => {

    swService.getPeople().subscribe((data: any) => {
      expect(data.birth_year).toEqual('19BBY');
      expect(data.eye_color).toEqual('blue');
      expect(data.gender).toEqual('male');
      expect(data.hair_color).toEqual('blonde');
      expect(data.height).toEqual('172');
      expect(data.homeworld).toEqual('https://swapi.co/api/planets/1/');
      expect(data.mass).toEqual('77');
      expect(data.name).toEqual('Luke Skywalker');
      expect(data.skin_color).toEqual('fair');
      expect(data.url).toEqual('https://swapi.co/api/people/1/');
    });

    const req = httpMock.expectOne('https://swapi.co/api/people/', '/GET - all people');
    expect(req.request.method).toBe('GET');

    req.flush({
      birth_year: '19BBY',
      eye_color: 'blue',
      gender: 'male',
      hair_color: 'blonde',
      height: '172',
      homeworld: 'https://swapi.co/api/planets/1/',
      mass: '77',
      name: 'Luke Skywalker',
      skin_color: 'fair',
      url: 'https://swapi.co/api/people/1/'
    });

    httpMock.verify();
  });

  it('It should perform a GET request to fetch all planets successfully', () => {

    swService.getPlanets().subscribe((data: any) => {
      expect(data.climate).toEqual('temperate');
      expect(data.diameter).toEqual('12500');
      expect(data.gravity).toEqual('1 standard');
      expect(data.name).toEqual('Aldernaan');
      expect(data.orbital_period).toEqual('364');
      expect(data.population).toEqual('2000000000');
      expect(data.rotation_period).toEqual('24');
      expect(data.surface_water).toEqual('40');
      expect(data.terrain).toEqual('grasslands, mountain');
      expect(data.url).toEqual('https://swapi.co/api/planets/2/');
    });

    const req = httpMock.expectOne('https://swapi.co/api/planets/', '/GET - all planets');
    expect(req.request.method).toBe('GET');

    req.flush({
      climate: 'temperate',
      diameter: '12500',
      gravity: '1 standard',
      name: 'Aldernaan',
      orbital_period: '364',
      population: '2000000000',
      rotation_period: '24',
      surface_water: '40',
      terrain: 'grasslands, mountain',
      url: 'https://swapi.co/api/planets/2/'
    });

    httpMock.verify();
  });

  it('It should perform a GET request to fetch all species successfully', () => {

    swService.getSpecies().subscribe((data: any) => {
      expect(data.average_height).toEqual('300');
      expect(data.average_lifespan).toEqual('1000');
      expect(data.classification).toEqual('gastropod');
      expect(data.designation).toEqual('sentient');
      expect(data.eye_colors).toEqual('yellow, red');
      expect(data.hair_colors).toEqual('n/a');
      expect(data.homeworld).toEqual('');
      expect(data.language).toEqual('Huttese');
      expect(data.name).toEqual('Hutt');
      expect(data.skin_colors).toEqual('green, brown, tan');
      expect(data.url).toEqual('');
    });

    const req = httpMock.expectOne('https://swapi.co/api/species/', '/GET - all species');
    expect(req.request.method).toBe('GET');

    req.flush({
      average_height: '300',
      average_lifespan: '1000',
      classification: 'gastropod',
      designation: 'sentient',
      eye_colors: 'yellow, red',
      hair_colors: 'n/a',
      homeworld: '',
      language: 'Huttese',
      name: 'Hutt',
      skin_colors: 'green, brown, tan',
      url: ''
    });

    httpMock.verify();
  });

  it('It should perform a GET request to fetch all starships successfully', () => {

    swService.getStarships().subscribe((data: any) => {
      expect(data.MGLT).toEqual('40');
      expect(data.cargo_capacity).toEqual('250000000');
      expect(data.consumables).toEqual('6 years');
      expect(data.crew).toEqual('279144');
      expect(data.hyperdrive_rating).toEqual('2.0');
      expect(data.length).toEqual('19000');
      expect(data.manufacturer).toEqual('Kuat Drive Yards, Fondor Shipyards');
      expect(data.max_atmosphering_speed).toEqual('n/a');
      expect(data.model).toEqual('Executor-class star dreadnought');
      expect(data.name).toEqual('Executor');
      expect(data.passengers).toEqual('38000');
      expect(data.pilots).toEqual('');
      expect(data.starship_class).toEqual('Star dreadnought');
      expect(data.url).toEqual('https://swapi.co/api/starships/15/');
    });

    const req = httpMock.expectOne('https://swapi.co/api/starships/', '/GET - all starships');
    expect(req.request.method).toBe('GET');

    req.flush({
      MGLT: '40',
      cargo_capacity: '250000000',
      consumables: '6 years',
      crew: '279144',
      hyperdrive_rating: '2.0',
      length: '19000',
      manufacturer: 'Kuat Drive Yards, Fondor Shipyards',
      max_atmosphering_speed: 'n/a',
      model: 'Executor-class star dreadnought',
      name: 'Executor',
      passengers: '38000',
      pilots: '',
      starship_class: 'Star dreadnought',
      url: 'https://swapi.co/api/starships/15/'
    });

    httpMock.verify();
  });

  it('It should perform a GET request to fetch all vehicles successfully', () => {

    swService.getVehicles().subscribe((data: any) => {
      expect(data.cargo_capacity).toEqual('50000');
      expect(data.consumables).toEqual('2 months');
      expect(data.cost_in_credits).toEqual('150000');
      expect(data.crew).toEqual('46');
      expect(data.length).toEqual('36.8');
      expect(data.manufacturer).toEqual('Corellia Mining Corporation');
      expect(data.pilots).toEqual('');
      expect(data.url).toEqual('https://swapi.co/api/vehicles/4/');
      expect(data.vehicles_class).toEqual('wheeled');
    });

    const req = httpMock.expectOne('https://swapi.co/api/vehicles/', '/GET - all vehicles');
    expect(req.request.method).toBe('GET');

    req.flush({
      cargo_capacity: '50000',
      consumables: '2 months',
      cost_in_credits: '150000',
      crew: '46',
      length: '36.8',
      manufacturer: 'Corellia Mining Corporation',
      pilots: '',
      url: 'https://swapi.co/api/vehicles/4/',
      vehicles_class: 'wheeled'
    });

    httpMock.verify();
  });

});
