import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartService {

  constructor(private _httpClient:HttpClient) { }
  getData(){
    return this._httpClient.get("https://fakestoreapi.com/products?limit='4'&page='2'")
  }
}
