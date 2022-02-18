import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ConformationComponent } from 'src/app/dialog/conformation/conformation.component';
import { confirmatinDialog } from 'src/app/interfaces/dialogs.if';
import { UserService } from 'src/app/service/user/user.service';
import { SettingComponent } from '../setting/setting.component';
@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'mobile_no', 'edit', 'delete'];
  dataSource = [];
  length: number = 0;
  pageSize: number = 5;
  pageIndex: number = 0;
  constructor(private userService: UserService, public dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.fetchUserList({ offset: this.pageIndex * this.pageSize, limit: this.pageSize });
  }
  pageEvent(event: PageEvent) {
    console.log(event);
    this.fetchUserList({ offset: event.pageIndex * event.pageSize, limit: event.pageSize });
  }
  fetchUserList(data: any = { offset: 0, limit: 5 }) {
    this.dataSource = [];
    this.userService.fetchUserList(data).subscribe((res: any) => {
      console.log(res.data)
      if (res.success) {
        this.length = res.count;
        this.dataSource = res.data;
      }
    });
  }
  editUser(id: number) {
    this.dialog.open(EditUserDialog, {
      data: id
    });
  }
  deleteUser(user: any) {
    var data: confirmatinDialog = {
      buttonone: "Ok",
      buttontwo: "Cancle",
      message: `Do you want to Delete User ${user.name}`
    };
    const dialogRef = this.dialog.open(ConformationComponent, { data })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.fetchUserList({ offset: this.pageIndex * this.pageSize, limit: this.pageSize });
      }
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  template: `
    <app-edit-user-detais [userid]="id"></app-edit-user-detais>`
})
export class EditUserDialog {
  id = 0;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.id = data
  }
}
