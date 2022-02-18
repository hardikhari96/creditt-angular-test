import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formgroup = new FormGroup({
    email: new FormControl("", [Validators.required,Validators.email]),
    password: new FormControl("", [Validators.required,])
  })
  constructor() { }

  ngOnInit(): void {
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.formgroup.controls[controlName].hasError(errorName);
  }
  loginUser(){
    console.log(this.formgroup.valid);
    console.log(this.formgroup.value);
  }
}
