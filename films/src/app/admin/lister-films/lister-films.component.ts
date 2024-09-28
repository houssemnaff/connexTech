import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { Film } from 'src/app/shared/models/film';

@Component({
  selector: 'app-lister-films',
  templateUrl: './lister-films.component.html',
  styleUrls: ['./lister-films.component.css']
})
export class ListerFilmsComponent  implements OnInit {
  tabFilms: Film[] = []; 
  constructor(private filmsService : FilmsService) { } 
  ngOnInit(): void { 
  this.tabFilms=this.filmsService.getFilms(); 
  }
  supprimer(id:number){
    this.filmsService.delete(id);
  }

}
