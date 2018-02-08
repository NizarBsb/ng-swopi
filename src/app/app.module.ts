import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

import { StarWarsService } from './star-wars.service';

@NgModule({
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
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ StarWarsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
