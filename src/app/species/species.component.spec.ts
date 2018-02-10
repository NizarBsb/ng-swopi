import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StarWarsService } from '../star-wars.service';
import { HttpClientModule } from '@angular/common/http';
import { SpeciesComponent } from './species.component';
import { MaterialModule } from '../material.module';

describe('SpeciesComponentTest', () => {
  let component: SpeciesComponent;
  let fixture: ComponentFixture<SpeciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SpeciesComponent
      ],
      imports: [ HttpClientModule, MaterialModule ],
      providers: [ StarWarsService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('It should create Species component', () => {
    expect(component instanceof SpeciesComponent).toBeTruthy();
  });

  it('It should call getSpecies method successfully', async() => {
    const service = TestBed.get(StarWarsService);
    spyOn(service, 'getSpecies');

    fixture.whenStable().then(() => {
      expect(service.getSpecies).toHaveBeenCalled();
    });
  })

});
