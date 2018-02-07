import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StarWarsService } from '../star-wars.service';
import { HttpClientModule } from '@angular/common/http';
import { StarshipsComponent } from './starships.component';

describe('StarshipsComponentTest', () => {
  let component: StarshipsComponent;
  let fixture: ComponentFixture<StarshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StarshipsComponent
      ],
      imports: [ HttpClientModule ],
      providers: [ StarWarsService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('It should create Starships component', () => {
    expect(component instanceof StarshipsComponent).toBeTruthy();
  });

  it('It should call fetchStarships method', async() => {
    const startshipsFixture = TestBed.createComponent(StarshipsComponent);
    const starshipsComponent = startshipsFixture.debugElement.componentInstance;
    spyOn(starshipsComponent, 'fetchStarships');

    fixture.whenStable().then(() => {
      expect(starshipsComponent.fetchStarships).toHaveBeenCalled();
    });
  });

});
