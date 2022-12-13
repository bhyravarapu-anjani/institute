import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products:any=[
    {name:"samsung",price:25000,quantity:6,rating:2.5},
    {name:"Realme",price:15000,quantity:1,rating:4},
    {name:"oppo",price:8500,quantity:3,rating:3.8}, 
    {name:"Nokia",price:30000,quantity:2,rating:4.2}
  ]

  constructor() { }

}
