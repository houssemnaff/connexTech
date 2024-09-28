import { Component, OnInit } from '@angular/core';
import { FILMS } from 'src/app/shared/models/des-films';
import { Film } from 'src/app/shared/models/film';

@Component({
  selector: 'app-home-visiteur',
  templateUrl: './home-visiteur.component.html',
  styleUrls: ['./home-visiteur.component.css']
})
export class HomeVisiteurComponent implements OnInit { 
  tabFilms: Film[] = FILMS; 
  constructor() { } 
  ngOnInit(): void { 
  } 
  affiche(f:Film){
    f.descVisible=true;
  }
  cacher(f:Film){
    f.descVisible=false;
  }
 }





function ngOnInit() {
  throw new Error('Function not implemented.');
}

