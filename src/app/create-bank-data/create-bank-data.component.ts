import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-create-bank-data',
  templateUrl: './create-bank-data.component.html',
  styleUrls: ['./create-bank-data.component.css']
})
export class CreateBankDataComponent {
  constructor(private _bankData:BankService){}
  public bankForm:FormGroup=new FormGroup(
    {
      account_name:new FormControl(),
      available_balance: new FormControl(),
      currency:new FormControl(),
      user_image:new FormControl(),
      account_number:new FormControl()

    }
  )
  submit(){
    console.log(this.bankForm);
    this._bankData.createBankData(this.bankForm.value).subscribe(
      (data:any)=>{
        alert("created succesfully")
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

}
