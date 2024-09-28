import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
constructor( private router:Router){}
isLoggedIn = false; // Variable pour suivre l'état de connexion du client

  // Fonction pour basculer l'état de connexion

  toggleLogin(): void {
    if (this.isLoggedIn) {
      // Si l'utilisateur est connecté, effectuez le processus de déconnexion ici
      // ...

      this.router.navigate(['/']); // Rediriger vers la page d'accueil ou une autre page appropriée après la déconnexion
    } else {
      // Si l'utilisateur n'est pas connecté, redirigez vers les pages de login ou de sign-up
      this.router.navigate(['/login']); // Rediriger vers la page de login lorsqu'on clique sur 'Log-in'
      // ou
      this.router.navigate(['/signup']); // Rediriger vers la page de sign-up lorsqu'on clique sur 'Sign-up'
    }
  }
  login(): void {
    // Redirection vers la page de login
    this.router.navigate(['/login']);
    this.isLoggedIn = true;
  }

  signup(): void {
    // Redirection vers la page de sign-up
    this.router.navigate(['/signup']);
  }

  logout(): void {
    // Processus de déconnexion
    // ...
    this.isLoggedIn = false;
    // Redirection vers la page d'accueil ou une autre page appropriée après la déconnexion
    this.router.navigate(['/']);
  }
  ngOnInit(): void{
    
  }
}
