import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user/user.service';
@Component({
  selector: 'app-edit-user-detais',
  templateUrl: './edit-user-detais.component.html',
  styleUrls: ['./edit-user-detais.component.scss']
})
export class EditUserDetaisComponent implements OnInit {
  constructor(private formbuilder: FormBuilder, private dialog: MatDialog, private userService: UserService) { }
  @Input()
  get userid(): number { return this._userid; }
  set userid(userid: number) {
    this._userid = userid;
  }
  private _userid = 0;
  userDetailForm = new FormGroup({
    name: new FormControl("",)
  })

  ngOnInit(): void {

  }

}
