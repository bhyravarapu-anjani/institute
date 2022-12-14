import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  public studentForm:FormGroup=new FormGroup(
    {
      name: new FormControl(null,[Validators.required,Validators.minLength(3)]),
      email:new FormControl(null, [Validators.required]),
      phone:new FormControl(null, [Validators.required,Validators.min(10000000),Validators.max(9999999999999)] ),
      address:new FormGroup(
        {
          city:new FormControl(null, [Validators.required]),
          state:new FormControl(null,[Validators.required]),
          pin:new FormControl(null,[Validators.required,Validators.min(100000),Validators.max(999999)])

        }
      ),
      cards:new FormArray([]),
      type:new FormControl(),
      BusFees:new FormControl(),
      Hostelfees:new FormControl()

      }
    
  );
  get cardsFormArray(){
    return this.studentForm.get('cards') as FormArray;

  }
  add(){
    this.cardsFormArray.push(
      new FormGroup(
        {
          number:new FormControl(null, [Validators.required,Validators.min(100000000000),Validators.max(123456789123)]),
          expiry:new FormControl(),
          cvv:new FormControl(null,[Validators.required,Validators.min(100),Validators.max(999)])
        }
      )
    )
  }
  delete(i:number){
    this.cardsFormArray.removeAt(i)

  }
  constructor(){}
  submit(){
    console.log(this.studentForm);
  }

}
