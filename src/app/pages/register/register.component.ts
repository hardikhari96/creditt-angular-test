import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formgroup = new FormGroup({
    email: new FormControl("", [Validators.required,Validators.email]),
    password: new FormControl("", [Validators.required,]),
    name: new FormControl("", [Validators.required,]),
    phone: new FormControl("", [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  })
  constructor() { }
  ngOnInit(): void {

  }
  registerUser() {
    console.log(this.formgroup.valid);
    console.log(this.formgroup.value);
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.formgroup.controls[controlName].hasError(errorName);
  }
}
