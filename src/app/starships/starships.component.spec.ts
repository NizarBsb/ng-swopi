import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StarWarsService } from '../star-wars.service';
import { HttpClientModule } from '@angular/common/http';
import { StarshipsComponent } from './starships.component';
import { MaterialModule } from '../material.module';

describe('StarshipsComponentTest', () => {
  let component: StarshipsComponent;
  let fixture: ComponentFixture<StarshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StarshipsComponent
      ],
      imports: [ HttpClientModule, MaterialModule ],
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


  it('It should call getStarships method successfully', async() => {
    const service = TestBed.get(StarWarsService);
    spyOn(service, 'getStarships');

    fixture.whenStable().then(() => {
      expect(service.getStarships).toHaveBeenCalled();
    });
  })

});
