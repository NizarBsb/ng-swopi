import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpeciesComponent } from './species/species.component';
import {  StarshipsComponent} from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

export const routes: Routes = [
  { path: '', component: FilmsComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'species', component: SpeciesComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'vehicles', component: VehiclesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
