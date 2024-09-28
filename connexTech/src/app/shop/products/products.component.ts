import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/api/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  implements OnInit{

  public products:any;
  constructor(private api:ProductsService){}
  ngOnInit(): void {
    this.api.getProducts().subscribe(res=>{this.products=res

    })
   
    
  }
  getProductsid(id: any): Observable<any> {
    return this.api.getProductsparid(id);
  }
  
  ajouterpanier(data:any){
    this.api.ajouterpanier(data).subscribe(res=>{this.products=res})

  }
  addToCart(productId: any): void {
    this.getProductsid(productId).subscribe((product) => {
      this.ajouterpanier(product);
    });
  }
 

}
