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

import { ClientLandPageComponent } from './Pages/Client/client-land-page/client-land-page.component';
import { ClientClassRegisterPageComponent } from './Pages/Client/client-class-register-page/client-class-register-page.component';

import { BranchesManagementPageComponent } from './Pages/InnerAdmin/BranchGymPages/branches-management-page/branches-management-page.component';
import { GymsManagementPageComponent } from './Pages/InnerAdmin/BranchGymPages/gyms-management-page/gyms-management-page.component';
import { InventoryManagementComponent } from './Pages/InnerAdmin/EquipmentPages/inventory-management/inventory-management.component';
import { TeamTypeManagementComponent } from './Pages/InnerAdmin/EquipmentPages/team-type-management/team-type-management.component';
import { EmployeeManagementPageComponent } from './Pages/InnerAdmin/FormPages/employee-management-page/employee-management-page.component';
import { JobManagementPageComponent } from './Pages/InnerAdmin/FormPages/job-management-page/job-management-page.component';
import { PayrollManagementPageComponent } from './Pages/InnerAdmin/FormPages/payroll-management-page/payroll-management-page.component';
import { ProductsManagementPageComponent } from './Pages/InnerAdmin/ServicesPages/products-management-page/products-management-page.component';
import { ServicesManagementPageComponent } from './Pages/InnerAdmin/ServicesPages/services-management-page/services-management-page.component';
import { SpaTreatmentManagementPageComponent } from './Pages/InnerAdmin/ServicesPages/spa-treatment-management-page/spa-treatment-management-page.component';

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
  },
  {
    path:'ClientLandPage',
    component: ClientLandPageComponent
  },
  {
    path:'ClientClassRegisterPage',
    component: ClientClassRegisterPageComponent
  },
  {
    path:'BranchesManagement',
    component: BranchesManagementPageComponent
  },
  {
    path:'GymsManagement',
    component: GymsManagementPageComponent
  },
  {
    path:'InventoryManagement',
    component: InventoryManagementComponent
  },
  {
    path:'TeamTypeManagement',
    component: TeamTypeManagementComponent
  },
  {
    path:'EmployeeManagement',
    component: EmployeeManagementPageComponent
  },
  {
    path:'JobsManagement',
    component: JobManagementPageComponent
  },
  {
    path:'PayrollManagement',
    component: PayrollManagementPageComponent
  },
  {
    path:'ProductsManagement',
    component: ProductsManagementPageComponent
  },
  {
    path:'ServicesManagement',
    component: ServicesManagementPageComponent
  },
  {
    path:'SpaTreatmentManagement',
    component: SpaTreatmentManagementPageComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
