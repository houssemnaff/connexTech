import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { ProductsService } from 'src/app/api/products.service';

import { ProductsComponent } from 'src/app/shop/products/products.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; // Initialisation des propriétés username et password
  password: string = '';
  constructor(private api:ProductsService,private router:Router){}
  a(x:any){
    console.log(x.value.username);
    console.log(x.value.password);
  }
  signIn(username: string, password: string): void {
    this.api.signIn(username, password).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate(['/dashboard']);
        console.log('Authentification réussie ! Redirection...');
      } else {
        // Gérer les échecs d'authentification
        console.log('Identifiants incorrects');
      }
    });
  }
  
  
}