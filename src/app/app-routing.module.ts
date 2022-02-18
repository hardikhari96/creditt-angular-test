import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"login",
    pathMatch: 'full'
  },
  {
    path:"login",
    component:LoginComponent,
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [{
      path: '',
      loadChildren: ()=>PagesModule
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
