import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StarWarsService } from '../star-wars.service';
import { HttpClientModule } from '@angular/common/http';
import { PlanetsComponent } from './planets.component';

describe('PlanetComponentTest', () => {
  let component: PlanetsComponent;
  let fixture: ComponentFixture<PlanetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlanetsComponent
      ],
      imports: [ HttpClientModule ],
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

  it('It should call fetchPlanets method', async() => {
    const planetsFixture = TestBed.createComponent(PlanetsComponent);
    const planetsComponent = planetsFixture.debugElement.componentInstance;
    spyOn(planetsComponent, 'fetchPlanets');

    fixture.whenStable().then(() => {
      expect(planetsComponent.fetchPeople).toHaveBeenCalled();
    });
  });

});
