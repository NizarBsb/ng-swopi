import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { FilmsComponent } from './films/films.component'
import { PeopleComponent} from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { MaterialModule } from './material.module';

describe('AppComponentTest', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FilmsComponent,
        PeopleComponent,
        PlanetsComponent,
        SpeciesComponent,
        StarshipsComponent,
        VehiclesComponent
      ],
      imports: [
        MaterialModule,
        RouterModule.forRoot(routes)
      ],
      providers: [
        [{provide: APP_BASE_HREF, useValue : '/' }]
      ]
    }).compileComponents();
  }));

  it('It should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app instanceof AppComponent).toBeTruthy();
  }));

});
