import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmDataSource, FilmsComponent } from './films.component';
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

});
