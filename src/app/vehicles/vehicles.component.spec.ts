import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StarWarsService } from '../star-wars.service';
import { HttpClientModule } from '@angular/common/http';
import { VehiclesComponent } from './vehicles.component';

describe('PlanetComponentTest', () => {
  let component: VehiclesComponent;
  let fixture: ComponentFixture<VehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VehiclesComponent
      ],
      imports: [ HttpClientModule ],
      providers: [ StarWarsService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('It should create Vehicles component', () => {
    expect(component instanceof VehiclesComponent).toBeTruthy();
  });

  it('It should call fetchVehicles method', async() => {
    const vehiclesFixture = TestBed.createComponent(VehiclesComponent);
    const vehiclesComponent = vehiclesFixture.debugElement.componentInstance;
    spyOn(vehiclesComponent, 'fetchVehicles');

    fixture.whenStable().then(() => {
      expect(vehiclesComponent.fetchVehicles).toHaveBeenCalled();
    });
  });

});
