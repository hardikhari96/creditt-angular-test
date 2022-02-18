import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { SettingComponent } from './setting/setting.component';
import { RouterModule } from '@angular/router';
import routes from './pages.routes';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { EditUserDetaisComponent } from '../components/edit-user-detais/edit-user-detais.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../intercepters/auth.interceptor';
@NgModule({
  declarations: [
    ManageUsersComponent,
    SettingComponent,
    EditUserDetaisComponent
  ],
  imports: [
    MatTabsModule,
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,

    RouterModule.forChild(routes)
  ],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ]
})
export class PagesModule { }
