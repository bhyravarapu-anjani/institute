import { Component } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.css']
})
export class EmployeedataComponent {
  public employeeForm:FormGroup=new FormGroup(
    {

    Name:new FormControl(),
    Mobile:new FormControl(),
    Email:new FormControl(),
    DateOfBirth: new FormControl(),
    address:new FormGroup(
      {
        addressLine:new FormControl(),
        city:new FormControl(),
        state:new FormControl(),
        pincode:new FormControl(),
        location:new FormGroup(
          {
            nearBy:new FormControl(),
            landMark:new FormControl()
          }
        
        )

        }
      

    ),
    educations:new FormArray([]),
    type:new FormControl(),
    FrontendEngineer:new FormControl(),
    BackendEngineer:new FormControl()

    }
  ) ;
  get educationFormArray(){
    return this.employeeForm.get('educations') as FormArray;
  }
  add(){
    this.educationFormArray.push(
      new FormGroup(
        {
          qualification:new FormControl()
        }

      )

    )
  }
  delete(i:number){
    this.educationFormArray.removeAt(i)
  }
  

  
  constructor(){}
  submit(){
    console.log(this.employeeForm)
  }

}
