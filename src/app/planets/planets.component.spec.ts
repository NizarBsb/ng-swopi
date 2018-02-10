import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StarWarsService } from '../star-wars.service';
import { HttpClientModule } from '@angular/common/http';
import { PlanetsComponent } from './planets.component';
import { MaterialModule } from '../material.module';

describe('PlanetComponentTest', () => {
  let component: PlanetsComponent;
  let fixture: ComponentFixture<PlanetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlanetsComponent
      ],
      imports: [ HttpClientModule, MaterialModule ],
      providers: [ StarWarsService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('It should create Planets component', () => {
    expect(component instanceof PlanetsComponent).toBeTruthy();
  });


  it('It should call getPlanets method successfully', async() => {
    const service = TestBed.get(StarWarsService);
    spyOn(service, 'getPlanets');

    fixture.whenStable().then(() => {
      expect(service.getPlanets).toHaveBeenCalled();
    });
  });

});
