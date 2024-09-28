import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListerFilmsComponent } from './lister-films/lister-films.component';
import { AjouterFilmsComponent } from './ajouter-films/ajouter-films.component';
import { DetailsFilmComponent } from './details-film/details-film.component';
import { ModifierFilmComponent } from './modifier-film/modifier-film.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    ListerFilmsComponent,
    AjouterFilmsComponent,
    DetailsFilmComponent,
    ModifierFilmComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
