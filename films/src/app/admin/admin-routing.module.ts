import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ListerFilmsComponent } from './lister-films/lister-films.component';
import { AjouterFilmsComponent } from './ajouter-films/ajouter-films.component';
import { DetailFilmComponent } from '../visiteur/detail-film/detail-film.component';
import { DetailsFilmComponent } from './details-film/details-film.component';
import { ModifierFilmComponent } from './modifier-film/modifier-film.component';

const routes: Routes = [{ path: '', component: AdminComponent ,
children: [ 
  {path: 'lister-films', component: ListerFilmsComponent }, 
  {path: 'ajouter-films', component: AjouterFilmsComponent },
  { path: 'details/:id', component: DetailsFilmComponent },
  {path:'modifier/:id',component:ModifierFilmComponent}
  ], }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
