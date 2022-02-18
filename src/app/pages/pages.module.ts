import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { SettingComponent } from './setting/setting.component';
import { RouterModule } from '@angular/router';
import routes from './pages.routes';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    ManageUsersComponent,
    SettingComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
