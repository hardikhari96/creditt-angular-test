import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ManageUsersComponent } from "../manage-users/manage-users.component";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  userid:number = 0;
  ngOnInit(): void {
    var userDataString = localStorage.getItem("user");
    if (userDataString) {
      this.userid = JSON.parse(userDataString).id;
    }
  }

  openDialog(){
    const dialogRef = this.dialog.open(ManageUsersComponent,{
      data: {
        animal: 'panda',
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
