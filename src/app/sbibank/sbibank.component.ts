import { Component } from '@angular/core';
import { SbibankService } from '../sbibank.service';

@Component({
  selector: 'app-sbibank',
  templateUrl: './sbibank.component.html',
  styleUrls: ['./sbibank.component.css']
})
export class SbibankComponent {
  public informations:any=[]; 
  constructor(private _sbiBankdata:SbibankService){
    this._sbiBankdata.getBankList().subscribe(
      (data:any)=>{
        this.informations=data
      },
      (err:any)=>{
        alert("information invalid")
      }

    )
    

  }

}
