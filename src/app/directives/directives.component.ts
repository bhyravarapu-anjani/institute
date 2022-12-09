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
    {name:"anjani",age:19,package:9},
    {name:"Shareef",age:40,package:14},
    {name:"sai",age:24,package:13}
  ];
  public time:number=14;
  public today:any=new Date();

}
