import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-modifier-film',
  templateUrl: './modifier-film.component.html',
  styleUrls: ['./modifier-film.component.css']
})
export class ModifierFilmComponent  implements OnInit{
  id: string='';
  filmsService: any;
  routes: any;
f: any;

  constructor(private filmService:FilmsService,private route:Router){

  }
  ngOnInit():void{}
    //const id =this.routes.snapshot.params['id']-1;
    //this.id=this.filmService.getFilmParId(+id).id+this.id;
    update(desc: string,name: string){
      const id = this.routes.snapshot.params['id']-1; 
      this.filmsService.updatefilmbyid(id,desc,name);
      this.route.navigate(['/admin/ister-films']);
 
  }
  
    
  

}
