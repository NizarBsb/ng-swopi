import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmsComponent } from './films.component';
import { StarWarsService } from '../star-wars.service';
import { HttpClientModule } from '@angular/common/http';

describe('FilmsComponentTest', () => {
  let component: FilmsComponent;
  let fixture: ComponentFixture<FilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilmsComponent
      ],
      imports: [ HttpClientModule],
      providers: [ StarWarsService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('It should create Films component', () => {
    expect(component instanceof FilmsComponent).toBeTruthy();
  });

  it('It should call fetchFilms method', async() => {
    const filmFixture = TestBed.createComponent(FilmsComponent);
    const filmsComponent = filmFixture.debugElement.componentInstance;
    spyOn(filmsComponent, 'fetchFilms');

    fixture.whenStable().then(() => {
      expect(filmsComponent.fetchFilms).toHaveBeenCalled();
    });
  });

});
