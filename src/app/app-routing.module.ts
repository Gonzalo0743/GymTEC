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

import { BranchesManagementPageComponent } from './Pages/InnerAdmin/BranchShopsPages/BranchesPages/branches-management-page/branches-management-page.component';
import { ShowAllBranchesComponent } from './Pages/InnerAdmin/BranchShopsPages/BranchesPages/show-all-branches/show-all-branches.component';
import { AddBranchesComponent } from './Pages/InnerAdmin/BranchShopsPages/BranchesPages/add-branches/add-branches.component';
import { ShowBranchesComponent } from './Pages/InnerAdmin/BranchShopsPages/BranchesPages/show-branches/show-branches.component';
import { DeleteBranchesComponent } from './Pages/InnerAdmin/BranchShopsPages/BranchesPages/delete-branches/delete-branches.component';


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

import { JobManagementPageComponent } from './Pages/InnerAdmin/FormPages/JobPages/job-management-page/job-management-page.component';
import { PayrollManagementPageComponent } from './Pages/InnerAdmin/FormPages/PayrollPages/payroll-management-page/payroll-management-page.component';
import { ProductsManagementPageComponent } from './Pages/InnerAdmin/ServicesPages/ProductsPages/products-management-page/products-management-page.component';
import { ServicesManagementPageComponent } from './Pages/InnerAdmin/ServicesPages/ServicesPages/services-management-page/services-management-page.component';
import { ShowAllInventoryComponent } from './Pages/InnerAdmin/EquipmentPages/InventoryPages/show-all-inventory/show-all-inventory.component';
import { EditInventoryComponent } from './Pages/InnerAdmin/EquipmentPages/InventoryPages/edit-inventory/edit-inventory.component';
import { ShowPayrollComponent } from './Pages/InnerAdmin/FormPages/PayrollPages/show-payroll/show-payroll.component';
import { ShowAllPayrollComponent } from './Pages/InnerAdmin/FormPages/PayrollPages/show-all-payroll/show-all-payroll.component';
import { EditPayrollComponent } from './Pages/InnerAdmin/FormPages/PayrollPages/edit-payroll/edit-payroll.component';
import { EditBranchesComponent } from './Pages/InnerAdmin/BranchShopsPages/BranchesPages/edit-branches/edit-branches.component';
import { AddProductsComponent } from './Pages/InnerAdmin/ServicesPages/ProductsPages/add-products/add-products.component';
import { EditProductsComponent } from './Pages/InnerAdmin/ServicesPages/ProductsPages/edit-products/edit-products.component';
import { ShowProductsComponent } from './Pages/InnerAdmin/ServicesPages/ProductsPages/show-products/show-products.component';
import { ShowAllProductsComponent } from './Pages/InnerAdmin/ServicesPages/ProductsPages/show-all-products/show-all-products.component';
import { DeleteProductsComponent } from './Pages/InnerAdmin/ServicesPages/ProductsPages/delete-products/delete-products.component';
import { ShowAllEmployeeComponent } from './Pages/InnerAdmin/FormPages/EmployeePages/show-all-employee/show-all-employee.component';
import { EditEmployeeComponent } from './Pages/InnerAdmin/FormPages/EmployeePages/edit-employee/edit-employee.component';
import { ShowAllServicesComponent } from './Pages/InnerAdmin/ServicesPages/ServicesPages/show-all-services/show-all-services.component';
import { AddServicesComponent } from './Pages/InnerAdmin/ServicesPages/ServicesPages/add-services/add-services.component';
import { EditServicesComponent } from './Pages/InnerAdmin/ServicesPages/ServicesPages/edit-services/edit-services.component';
import { DeleteServicesComponent } from './Pages/InnerAdmin/ServicesPages/ServicesPages/delete-services/delete-services.component';
import { ShopsManagementComponent } from './Pages/InnerAdmin/BranchShopsPages/ShopsPages/shops-management/shops-management.component';
import { AllShopsComponent } from './Pages/InnerAdmin/BranchShopsPages/ShopsPages/all-shops/all-shops.component';
import { EditShopsComponent } from './Pages/InnerAdmin/BranchShopsPages/ShopsPages/edit-shops/edit-shops.component';
import { LessonsManagementComponent } from './Pages/InnerAdmin/ServicesPages/LessonsPages/lessons-management/lessons-management.component';
import { AddLessonsComponent } from './Pages/InnerAdmin/ServicesPages/LessonsPages/add-lessons/add-lessons.component';
import { ShowProductsShopsComponent } from './Pages/InnerAdmin/BranchShopsPages/ShopsPages/show-products-shops/show-products-shops.component';
import { ShowAllSpaComponent } from './Pages/InnerAdmin/ServicesPages/SpaPages/show-all-spa/show-all-spa.component';
import { EditSpaComponent } from './Pages/InnerAdmin/ServicesPages/SpaPages/edit-spa/edit-spa.component';
import { ShowSpaTreatmentComponent } from './Pages/InnerAdmin/ServicesPages/SpaPages/show-spa-treatment/show-spa-treatment.component';
import { SpaManegementComponent } from './Pages/InnerAdmin/ServicesPages/SpaPages/spa-manegement/spa-manegement.component';
import { ShowAllJobComponent } from './Pages/InnerAdmin/FormPages/JobPages/show-all-job/show-all-job.component';
import { ShowJobComponent } from './Pages/InnerAdmin/FormPages/JobPages/show-job/show-job.component';
import { EditJobComponent } from './Pages/InnerAdmin/FormPages/JobPages/edit-job/edit-job.component';
import { ShowAllClassesComponent } from './Pages/Client/show-all-classes/show-all-classes.component';
import { AddClientToClassComponent } from './Pages/Client/add-client-to-class/add-client-to-class.component';


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
    path:'ShowAllClasses',
    component: ShowAllClassesComponent
  },
  {
    path:'ClassRegisterPage',
    component: AddClientToClassComponent
  },
  
  {
    path:'LessonsManagement',
    component: LessonsManagementComponent
  },
  {
    path:'AddLessons',
    component: AddLessonsComponent
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
    path:'EditBranches',
    component: EditBranchesComponent
  },
  {
    path:'ShopsManagement',
    component: ShopsManagementComponent
  },
  {
    path:'ShowAllShops',
    component: AllShopsComponent
  },
  {
    path:'EditShops',
    component: EditShopsComponent
  },
  {
    path:'ShowProductShops',
    component: ShowProductsShopsComponent
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
    path:'ShowAllEmployee',
    component: ShowAllEmployeeComponent
  },
  {
    path:'EditEmployee',
    component: EditEmployeeComponent
  },
  {
    path:'JobManagement',
    component: JobManagementPageComponent
  },
  {
    path:'ShowAllJob',
    component: ShowAllJobComponent
  },
  {
    path:'ShowJob',
    component: ShowJobComponent
  },
  {
    path:'EditJob',
    component: EditJobComponent
  },
  {
    path:'PayrollManagement',
    component: PayrollManagementPageComponent
  },
  {
    path:'ShowPayroll',
    component: ShowPayrollComponent
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
    path:'AddProducts',
    component: AddProductsComponent
  },
  {
    path:'EditProducts',
    component: EditProductsComponent
  },
  {
    path:'ShowProducts',
    component: ShowProductsComponent
  },
  {
    path:'ShowAllProducts',
    component: ShowAllProductsComponent
  },
  {
    path:'DeleteProducts',
    component: DeleteProductsComponent
  },
  {
    path:'ServicesManagement',
    component: ServicesManagementPageComponent
  },
  {
    path:'ShowAllServices',
    component: ShowAllServicesComponent
  },
  {
    path:'AddServices',
    component: AddServicesComponent
  },
  {
    path:'EditServices',
    component: EditServicesComponent
  },
  {
    path:'DeleteServices',
    component: DeleteServicesComponent
  },
  {
    path:'ShowAllSpa',
    component: ShowAllSpaComponent
  },
  {
    path:'EditSpa',
    component: EditSpaComponent
  },
  {
    path:'ShowSpaTreatment',
    component: ShowSpaTreatmentComponent
  },
  {
    path:'SpaManagement',
    component: SpaManegementComponent
  },

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
