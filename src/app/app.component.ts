import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RegistrationFormTemplateDriven';
  gender = 'male'; //default value
  selectedBranches:Array<number> = [];
  
  RegisterStudent(studentForm: NgForm): void {   
    console.log(studentForm.value);
    console.log(studentForm.valid);
    console.log(studentForm.value.firstName);
    const fName:string = studentForm.controls['firstName'].value;
    console.log(fName);
    console.log("touched form");
    console.log(studentForm.touched);
    console.log(this.selectedBranches);     
  }
}
