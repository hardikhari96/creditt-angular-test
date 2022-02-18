import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  EditUserDialog, ManageUsersComponent } from './manage-users/manage-users.component';
import { SettingComponent } from './setting/setting.component';
import { RouterModule } from '@angular/router';
import routes from './pages.routes';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { EditUserDetaisComponent } from '../components/edit-user-detais/edit-user-detais.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../intercepters/auth.interceptor';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AuthService } from '../service/auth/auth.service';
import { AuthGuard } from '../guard/auth/auth.guard';
import { PagesComponent } from './pages.component';
import { MatIconModule } from '@angular/material/icon';
import { ConformationComponent } from '../dialog/conformation/conformation.component';

@NgModule({
  declarations: [
    ManageUsersComponent,
    SettingComponent,
    EditUserDetaisComponent,
    EditUserDialog,
    ConformationComponent
  ],
  imports: [
    MatTabsModule,
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatDividerModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [PagesComponent]
})
export class PagesModule { }
