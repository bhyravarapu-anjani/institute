import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  public names:string[]=["anjani","praveen","bhavani"]
  public states:string[]=["Andhra","telangana","madyapradesh"]
  public users:any=
  [
    {name:"anjani",age:25,package:12},
    {name:"Shareef",age:30,package:14},
    {name:"sai",age:24,package:13}
  ];
  public time:number=14;

}
