import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StarWarsService } from '../star-wars.service';
import { HttpClientModule } from '@angular/common/http';
import { PeopleComponent } from './people.component';

describe('PeopleComponentTest', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PeopleComponent
      ],
      imports: [ HttpClientModule ],
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

  it('It should call fetchPeople method', async() => {
    const peopleFixture = TestBed.createComponent(PeopleComponent);
    const peopleComponent = peopleFixture.debugElement.componentInstance;
    spyOn(peopleComponent, 'fetchPeople');

    fixture.whenStable().then(() => {
      expect(peopleComponent.fetchPeople).toHaveBeenCalled();
    });
  });

});
