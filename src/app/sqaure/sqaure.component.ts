import { Component } from '@angular/core';

@Component({
  selector: 'app-sqaure',
  templateUrl: './sqaure.component.html',
  styleUrls: ['./sqaure.component.css']
})
export class SqaureComponent {
  public number1:number=0;
  public number2:number=0;
  public result:number=0;

  area(){
    this.result=this.number1*this.number2
  }
  perimeter(){
    this.result=4*this.number1
  }

}
