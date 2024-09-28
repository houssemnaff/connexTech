import { Component } from '@angular/core';
import { ProductsService } from 'src/app/api/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  products: any;
  isLoggedIn = false;
  myArray: any =[];
  myCommande: any = {
    id: '',
    title: '',
    prix: '',
    image: '',
    desc:''
  }
  myCondition = false;

  constructor(private api:ProductsService){}
  ngOnInit(): void {
    this.api.getProducts().subscribe(res=>{this.products=res

    })
   
    
  }
  updateProduct(updatedProduct: any): void {
    this.myCondition = false;
    this.api.updateProduct(updatedProduct).subscribe(response => {
      console.log('Product updated successfully:', response);
      // Mettre à jour les données dans votre liste de produits après la mise à jour
      // par exemple, vous pouvez réappeler getProducts() ici pour récupérer les nouvelles données
    }, error => {
      console.error('Error updating product:', error);
    });
  }
  supprimerproduits(id:any){
    this.api.delete(id).subscribe(res=>{this.products=res})
    location.reload();
  }
  editCommande(myVariable: any) {
    this.myCommande = myVariable;
    this.myCondition = true;
  }
  ajouter(myCommande:any){
    this.myCondition = false;
    this.api.ajouterproduit(myCommande).subscribe(res=>{this.products=res})
    location.reload();
  }
  
}
