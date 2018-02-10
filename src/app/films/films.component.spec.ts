import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmsComponent } from './films.component';
import { StarWarsService } from '../star-wars.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';

describe('FilmsComponentTest', () => {
  let component: FilmsComponent;
  let fixture: ComponentFixture<FilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilmsComponent
      ],
      imports: [ HttpClientModule, MaterialModule ],
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

  it('It should call getFilms method successfully', async() => {
    const service = TestBed.get(StarWarsService);
    spyOn(service, 'getFilms');

    fixture.whenStable().then(() => {
      expect(service.getFilms).toHaveBeenCalled();
    });
  });

});
