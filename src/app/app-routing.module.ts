import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { LoginAdminComponent } from './Pages/login-admin/login-admin.component';
import { RegisterClientComponent } from './Pages/register-client/register-client.component';
import { RegisterAdminComponent } from './Pages/register-admin/register-admin.component';



const routes: Routes = [
  {
    path:'',
    component: MainPageComponent
  },
  {
    path:'loginAdmin',
    component: LoginAdminComponent
  },
  {
    path:'registerClient',
    component: RegisterClientComponent
  },
  {
    path:'registerAdmin',
    component: RegisterAdminComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
