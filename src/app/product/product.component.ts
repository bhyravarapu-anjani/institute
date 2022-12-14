import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public lists:any=[];
  
  constructor(private _productList:ProductService){
    this.lists = this._productList.products;

    
  }
  sort(){
    this.lists=this.lists.sort((a:any,b:any)=>a.name.localCompare(b.name));
    this.lists=this.lists.sort((a:any,b:any)=>a.price-b.price);
  }

  
  
}
