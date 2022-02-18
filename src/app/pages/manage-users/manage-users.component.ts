import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
  @Inject(MAT_DIALOG_DATA) public data: any
  constructor( ) {

  }

  ngOnInit(): void {
  console.log(this.data);
  }

}
