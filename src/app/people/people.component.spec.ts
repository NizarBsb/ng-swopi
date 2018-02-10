import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StarWarsService } from '../star-wars.service';
import { HttpClientModule } from '@angular/common/http';
import { PeopleComponent } from './people.component';
import { MaterialModule } from '../material.module';

describe('PeopleComponentTest', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PeopleComponent
      ],
      imports: [ HttpClientModule, MaterialModule ],
      providers: [ StarWarsService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('It should create People component', () => {
    expect(component instanceof PeopleComponent).toBeTruthy();
  });

  it('It should call getPeople method successfully', async() => {
    const service = TestBed.get(StarWarsService);
    spyOn(service, 'getPeople');

    fixture.whenStable().then(() => {
      expect(service.getPeople).toHaveBeenCalled();
    });
  });

});
