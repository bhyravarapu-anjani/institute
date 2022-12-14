import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
  public lists:any=[];
  constructor(private _mailServices:MailService){
    this._mailServices.getData().subscribe(
      (data:any)=>{
        this.lists=data
      },
      (err:any)=>{
        alert("invalid data")
      }
    )
  }
  


}
