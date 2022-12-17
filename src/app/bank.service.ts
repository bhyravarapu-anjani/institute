import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  constructor(private _httpClient:HttpClient){}
  public balance:number=1000;

  
  withdraw(amount:number){
    this.balance=this.balance-amount
  }
  deposit(amount:number){
    this.balance=this.balance+amount
  }
  showbalance(){
    return this.balance;
  }
  createBankData(data:any):Observable<any>{
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data);
  }
}
