import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './LoginAndRegister/main-page/main-page.component';
import { LoginAdminComponent } from './LoginAndRegister/login-admin/login-admin.component';
import { RegisterClientComponent } from './LoginAndRegister/register-client/register-client.component';
import { RegisterAdminComponent } from './LoginAndRegister/register-admin/register-admin.component';

import { AdminLandPageComponent } from './Pages/Admin/admin-land-page/admin-land-page.component';
import { AdminBranchPageComponent } from './Pages/Admin/admin-branch-page/admin-branch-page.component';
import { AdminFormPageComponent } from './Pages/Admin/admin-form-page/admin-form-page.component';
import { AdminEquipmentPageComponent } from './Pages/Admin/admin-equipment-page/admin-equipment-page.component';
import { AdminServicesPageComponent } from './Pages/Admin/admin-services-page/admin-services-page.component';

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
  },
  {
    path:'AdminLandPage',
    component: AdminLandPageComponent
  },
  {
    path:'AdminBranchPage',
    component: AdminBranchPageComponent
  },
  {
    path:'AdminFormPage',
    component: AdminFormPageComponent
  },
  {
    path:'AdminEquipmentPage',
    component: AdminEquipmentPageComponent
  },
  {
    path:'AdminServicesPage',
    component: AdminServicesPageComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
