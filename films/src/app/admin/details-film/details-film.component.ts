import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-details-film',
  templateUrl: './details-film.component.html',
  styleUrls: ['./details-film.component.css']
})
export class DetailsFilmComponent implements OnInit{
  nomFilm : string ='';
  desccFilm :string='';
  descFilm: any;
  filmsService: any;
  
  constructor(private route:ActivatedRoute,private filmService:FilmsService){}
  ngOnInit():void{
    const id =this.route.snapshot.params['id']-1;
    this.nomFilm=this.filmService.getFilmParId(+id).nom+this.nomFilm;
    this.descFilm=this.filmService.getFilmParId(+id).description+this.descFilm;
 

  }

}
