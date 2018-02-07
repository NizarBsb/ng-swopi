import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StarWarsService } from '../star-wars.service';
import { HttpClientModule } from '@angular/common/http';
import { SpeciesComponent } from './species.component';

describe('SpeciesComponentTest', () => {
  let component: SpeciesComponent;
  let fixture: ComponentFixture<SpeciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SpeciesComponent
      ],
      imports: [ HttpClientModule ],
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

  it('It should call fetchSpecies method', async() => {
    const speciesFixture = TestBed.createComponent(SpeciesComponent);
    const speciesComponent = speciesFixture.debugElement.componentInstance;
    spyOn(speciesComponent, 'fetchSpecies');

    fixture.whenStable().then(() => {
      expect(speciesComponent.fetchSpecies).toHaveBeenCalled();
    });
  });

});
