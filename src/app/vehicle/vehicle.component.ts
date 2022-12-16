import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  public vehicles:any=[];
  public term:string="";
  public id:number=0

  constructor(private _vehicleService:VehicleService){
    this._vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal server error")
      }

    )
  }
  
  filter(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("invalid data")
      }
    )
  }
  public column:string="";
  public order:string="";
  sort(){
    this._vehicleService.getSortedList(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
    },
    (err:any)=>{
      alert("invalid data");
    }


    )
  }
  page(page:number){
    this._vehicleService.getPagination(page).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("invalid data")
      }
    )
  }
  delete(id:string){
    this._vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{
       alert("delete successful");
       location.reload();
      },
      (err:any)=>{
        alert("invalid data");
        
      }
      
    )
  }


}
