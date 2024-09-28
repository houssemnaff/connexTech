import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http:HttpClient) { }
  apiUrl='localhost:3000/products';
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/products').pipe(
      map((res: any) => res)
    );
  }
  getProductsparid(id: any): Observable<any> {
    return this.http.get<any>('http://localhost:3000/products/' + id).pipe(
      map((res: any) => res)
    );;
  }
  
  getpanier(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/panier').pipe(
      map((res: any) => res)
    );
  }
  ajouterpanier(data:any): Observable<any> {
    return this.http.post<any>("http://localhost:3000/panier", data)
  }
  ajouterproduit(data:any): Observable<any> {
    return this.http.post<any>("http://localhost:3000/products", data)
  }
  suppanier(id: any): Observable<any> {
   
    return this.http.delete<any>('http://localhost:3000/panier/' + id);
  }
  delete(id: any): Observable<any> {
   
    return this.http.delete<any>('http://localhost:3000/products/' + id);
  }
  
  userexiste(name: string,password:string): Observable<boolean> {
    return this.http.get<any>(`http://localhost:3000/login?email=${name}&password=${password}`).pipe(
      map((response: any[]) => {
        // Vérifiez si la réponse de l'API contient des produits avec le nom spécifié
        return response.length > 0; // Retourne true si des produits sont trouvés, sinon false
      }),
      catchError((error: any) => {
        console.error('Error checking product existence:', error);
        return of(false); // En cas d'erreur, renvoie false
      })
    );
  }
  updateProduct(product: any): Observable<any> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.put(url, product);
  }
  private readonly username = 'adminadmin';
  private readonly password = '1111';

  signIn(username: string, password: string): Observable<boolean> {
    // Vérification des identifiants
    const isAuthenticated = username === this.username && password === this.password;
    return of(isAuthenticated);
  }

}
