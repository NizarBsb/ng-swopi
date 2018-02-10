import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StarWarsService } from '../star-wars.service';
import { HttpClientModule } from '@angular/common/http';
import { VehiclesComponent } from './vehicles.component';
import { MaterialModule } from '../material.module';

describe('PlanetComponentTest', () => {
  let component: VehiclesComponent;
  let fixture: ComponentFixture<VehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VehiclesComponent
      ],
      imports: [ HttpClientModule, MaterialModule ],
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

  it('It should call getVehicles method successfully', async() => {
    const service = TestBed.get(StarWarsService);
    spyOn(service, 'getVehicles');

    fixture.whenStable().then(() => {
      expect(service.getVehicles).toHaveBeenCalled();
    });
  })
});
