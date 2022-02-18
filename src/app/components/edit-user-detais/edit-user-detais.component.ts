import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-user-detais',
  templateUrl: './edit-user-detais.component.html',
  styleUrls: ['./edit-user-detais.component.scss']
})
export class EditUserDetaisComponent implements OnInit {
  constructor() { }
  @Input()
  get userid(): number { return this._userid; }
  set userid(userid: number) {
    this._userid = userid;
  }
  private _userid = 0;
  ngOnInit(): void {
    console.log(this.userid)
  }

}
