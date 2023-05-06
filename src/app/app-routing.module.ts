import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './LoginAndRegister/main-page/main-page.component';
import { LoginAdminComponent } from './LoginAndRegister/login-admin/login-admin.component';
import { RegisterClientComponent } from './LoginAndRegister/register-client/register-client.component';

import { AdminLandPageComponent } from './Pages/Admin/admin-land-page/admin-land-page.component';
import { AdminBranchPageComponent } from './Pages/Admin/admin-branch-page/admin-branch-page.component';
import { AdminFormPageComponent } from './Pages/Admin/admin-form-page/admin-form-page.component';
import { AdminEquipmentPageComponent } from './Pages/Admin/admin-equipment-page/admin-equipment-page.component';
import { AdminServicesPageComponent } from './Pages/Admin/admin-services-page/admin-services-page.component';

import { ClientLandPageComponent } from './Pages/Client/client-land-page/client-land-page.component';
import { ClientClassRegisterPageComponent } from './Pages/Client/client-class-register-page/client-class-register-page.component';

import { BranchesManagementPageComponent } from './Pages/InnerAdmin/BranchGymPages/BranchesPages/branches-management-page/branches-management-page.component';
import { ShowAllBranchesComponent } from './Pages/InnerAdmin/BranchGymPages/BranchesPages/show-all-branches/show-all-branches.component';
import { AddBranchesComponent } from './Pages/InnerAdmin/BranchGymPages/BranchesPages/add-branches/add-branches.component';
import { ShowBranchesComponent } from './Pages/InnerAdmin/BranchGymPages/BranchesPages/show-branches/show-branches.component';
import { DeleteBranchesComponent } from './Pages/InnerAdmin/BranchGymPages/BranchesPages/delete-branches/delete-branches.component';


import { GymsManagementPageComponent } from './Pages/InnerAdmin/BranchGymPages/gyms-management-page/gyms-management-page.component';

import { InventoryManagementComponent } from './Pages/InnerAdmin/EquipmentPages/InventoryPages/inventory-management/inventory-management.component';
import { AddInventoryComponent } from './Pages/InnerAdmin/EquipmentPages/InventoryPages/add-inventory/add-inventory.component';
import { ShowInventoryComponent } from './Pages/InnerAdmin/EquipmentPages/InventoryPages/show-inventory/show-inventory.component';
import { DeleteInventoryComponent } from './Pages/InnerAdmin/EquipmentPages/InventoryPages/delete-inventory/delete-inventory.component';

import { GearManagementComponent } from './Pages/InnerAdmin/EquipmentPages/GearPages/gear-management/gear-management.component';
import { AddGearComponent } from './Pages/InnerAdmin/EquipmentPages/GearPages/add-gear/add-gear.component';
import { ShowAllGearComponent } from './Pages/InnerAdmin/EquipmentPages/GearPages/show-all-gear/show-all-gear.component';
import { ShowGearComponent } from './Pages/InnerAdmin/EquipmentPages/GearPages/show-gear/show-gear.component';
import { EditGearComponent } from './Pages/InnerAdmin/EquipmentPages/GearPages/edit-gear/edit-gear.component';
import { DeleteGearComponent } from './Pages/InnerAdmin/EquipmentPages/GearPages/delete-gear/delete-gear.component';

import { EmployeeManagementPageComponent } from './Pages/InnerAdmin/FormPages/EmployeePages/employee-management-page/employee-management-page.component';
import { AddEmployeeComponent } from './Pages/InnerAdmin/FormPages/EmployeePages/add-employee/add-employee.component';
import { ShowEmployeeComponent } from './Pages/InnerAdmin/FormPages/EmployeePages/show-employee/show-employee.component';
import { DeleteEmployeeComponent } from './Pages/InnerAdmin/FormPages/EmployeePages/delete-employee/delete-employee.component';

import { JobManagementPageComponent } from './Pages/InnerAdmin/FormPages/job-management-page/job-management-page.component';
import { PayrollManagementPageComponent } from './Pages/InnerAdmin/FormPages/PayrollPages/payroll-management-page/payroll-management-page.component';
import { ProductsManagementPageComponent } from './Pages/InnerAdmin/ServicesPages/ProductsPages/products-management-page/products-management-page.component';
import { ServicesManagementPageComponent } from './Pages/InnerAdmin/ServicesPages/ServicesPages/services-management-page/services-management-page.component';
import { SpaTreatmentManagementPageComponent } from './Pages/InnerAdmin/ServicesPages/spa-treatment-management-page/spa-treatment-management-page.component';
import { ShowAllInventoryComponent } from './Pages/InnerAdmin/EquipmentPages/InventoryPages/show-all-inventory/show-all-inventory.component';
import { EditInventoryComponent } from './Pages/InnerAdmin/EquipmentPages/InventoryPages/edit-inventory/edit-inventory.component';
import { AddPayrollComponent } from './Pages/InnerAdmin/FormPages/PayrollPages/add-payroll/add-payroll.component';
import { ShowAllPayrollComponent } from './Pages/InnerAdmin/FormPages/PayrollPages/show-all-payroll/show-all-payroll.component';
import { EditPayrollComponent } from './Pages/InnerAdmin/FormPages/PayrollPages/edit-payroll/edit-payroll.component';


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
    path:'AddBranches',
    component: AddBranchesComponent
  },
  {
    path:'ShowAllBranches',
    component: ShowAllBranchesComponent
  },
  {
    path:'ShowBranches',
    component: ShowBranchesComponent
  },
  {
    path:'DeleteBranches',
    component: DeleteBranchesComponent
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
    path:'AddInventory',
    component: AddInventoryComponent

  },
  {
    path:'DeleteInventory',
    component: DeleteInventoryComponent

  },
  {
    path:'ShowInventory',
    component: ShowInventoryComponent

  },
  {
    path:'ShowAllInventory',
    component: ShowAllInventoryComponent

  },
  {
    path:'EditInventory',
    component: EditInventoryComponent

  },
  {
    path:'GearManagement',
    component: GearManagementComponent
  },
  {
    path:'AddGear',
    component: AddGearComponent
  },
  {
    path:'ShowGear',
    component: ShowGearComponent
  },
  {
    path:'ShowAllGear',
    component: ShowAllGearComponent
  },
  {
    path:'EditGear',
    component: EditGearComponent
  },
  {
    path:'DeleteGear',
    component: DeleteGearComponent
  },
  {
    path:'EmployeeManagement',
    component: EmployeeManagementPageComponent
  },
  {
    path:'AddEmployee',
    component: AddEmployeeComponent
  },
  {
    path:'ShowEmployee',
    component: ShowEmployeeComponent
  },
  {
    path:'DeleteEmployee',
    component: DeleteEmployeeComponent
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
    path:'AddPayroll',
    component: AddPayrollComponent
  },
  {
    path:'ShowAllPayroll',
    component: ShowAllPayrollComponent
  },
  {
    path:'EditPayroll',
    component: EditPayrollComponent
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
