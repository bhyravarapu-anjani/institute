import { Component } from '@angular/core';
import { BoredomService } from '../boredom.service';

@Component({
  selector: 'app-boredom',
  templateUrl: './boredom.component.html',
  styleUrls: ['./boredom.component.css']
})
export class BoredomComponent {
  public objects:any={};
  constructor(private _boredomService:BoredomService){
   

    
  }
  entryData(){
    this._boredomService.getData().subscribe(
      (data:any)=>{
        this.objects=data
      },
      (err:any)=>{
        alert("invalid data")
      }
  
     )
  }
  

}
