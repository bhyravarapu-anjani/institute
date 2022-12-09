import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  public age:number=20;
  public name:string="anjani";
  public isIndian:boolean=true;

  public phone:number=12;

  test(){
    alert("button clicked")
  }
  test2(){
    alert("cancel")
  }
  test3(){
    alert("keypressed")
  }
  test4(){
    alert("mouseenter")
  }
  test5(){
    alert("mouseleave")
  }

}
