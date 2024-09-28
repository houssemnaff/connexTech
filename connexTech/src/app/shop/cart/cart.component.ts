import { Component } from '@angular/core';
import { ProductsService } from 'src/app/api/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public products:any;
  constructor(private api:ProductsService){}
  ngOnInit(): void {
    this.api.getpanier().subscribe(res=>{this.products=res

    })
    
  }
  supprimerpanier(id:any){
    this.api.suppanier(id).subscribe(res=>{this.products=res})
    location.reload();
  }

}
