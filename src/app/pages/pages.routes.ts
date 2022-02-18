import { RouterModule, Routes } from '@angular/router';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { SettingComponent } from './setting/setting.component';
const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: 'full'
  },
  {
    path: "setting",
    component: SettingComponent
  },
  {
    path: "manageUser",
    component: ManageUsersComponent
  },
  {
    path: "",
    component: SettingComponent
  }

];
export default routes;
