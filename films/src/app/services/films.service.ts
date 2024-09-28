import { Injectable } from '@angular/core';
import { FILMS } from '../shared/models/des-films';
import { Film } from '../shared/models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  films : Film[]=FILMS;
  f: any;
  constructor() { }
  getFilms () : Film [] 
  { 
  return this.films; 
  }
  delete(index:number){
    this.films.splice(index,1);
  }
  ajouter(nom : string , desc :string){
    var f:Film;
    var id;
    if(this.films.length==0){
      id="1";
    }else{
      id=Number(this.getFilms()[this.getFilms().length -1].id)+1;
    }
    f=new Film();
    f.id=id.toString();
    f.description=desc;
    f.nom=nom;
    f.descVisible=true;
    this.getFilms()[this.getFilms().length]=f;
  }
  getFilmParId(id:number) : Film
  {
    var f :Film =new Film();
    f =this.getFilms()[id];
    return f;
  }
  updatefilmbyid(id:number, desc:string,name:string){
    var f: Film =new Film();
    f=this.getFilms()[id];
    //f.getfilmbyid(id)
    f.description=desc;
    f.nom=name;
  }
}
