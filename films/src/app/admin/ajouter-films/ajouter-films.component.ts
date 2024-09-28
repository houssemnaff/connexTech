import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-ajouter-films',
  templateUrl: './ajouter-films.component.html',
  styleUrls: ['./ajouter-films.component.css']
})
export class AjouterFilmsComponent  {
  
constructor( private filmsService:FilmsService , private route:Router){

}
  ajouterFilm(nom : string , desc :string){
    this.filmsService.ajouter(nom , desc );
    alert("film ajouter avec succes");
    this.route.navigate(['admin/lister-films']);
  }
}




