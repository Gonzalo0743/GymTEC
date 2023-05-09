import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderAdminComponent } from './Components/header-admin/header-admin.component';
import { FooterComponent } from './Components/footer/footer.component';

import { MainPageComponent } from './LoginAndRegister/main-page/main-page.component';
import { LoginAdminComponent } from './LoginAndRegister/login-admin/login-admin.component';
import { RegisterClientComponent } from './LoginAndRegister/register-client/register-client.component';

import { AdminLandPageComponent } from './Pages/Admin/admin-land-page/admin-land-page.component';
import { AdminBranchPageComponent } from './Pages/Admin/admin-branch-page/admin-branch-page.component';
import { AdminFormPageComponent } from './Pages/Admin/admin-form-page/admin-form-page.component';
import { AdminEquipmentPageComponent } from './Pages/Admin/admin-equipment-page/admin-equipment-page.component';
import { AdminServicesPageComponent } from './Pages/Admin/admin-services-page/admin-services-page.component';

import { BranchesManagementPageComponent } from './Pages/InnerAdmin/BranchShopsPages/BranchesPages/branches-management-page/branches-management-page.component';
import { AddBranchesComponent } from './Pages/InnerAdmin/BranchShopsPages/BranchesPages/add-branches/add-branches.component';
import { ShowBranchesComponent } from './Pages/InnerAdmin/BranchShopsPages/BranchesPages/show-branches/show-branches.component';


import { JobManagementPageComponent } from './Pages/InnerAdmin/FormPages/JobPages/job-management-page/job-management-page.component';
import { PayrollManagementPageComponent } from './Pages/InnerAdmin/FormPages/PayrollPages/payroll-management-page/payroll-management-page.component';

import { EmployeeManagementPageComponent } from './Pages/InnerAdmin/FormPages/EmployeePages/employee-management-page/employee-management-page.component';

import { GearManagementComponent } from './Pages/InnerAdmin/EquipmentPages/GearPages/gear-management/gear-management.component';

import { InventoryManagementComponent } from './Pages/InnerAdmin/EquipmentPages/InventoryPages/inventory-management/inventory-management.component';
import { AddInventoryComponent } from './Pages/InnerAdmin/EquipmentPages/InventoryPages/add-inventory/add-inventory.component';


import { ServicesManagementPageComponent } from './Pages/InnerAdmin/ServicesPages/ServicesPages/services-management-page/services-management-page.component';
import { ProductsManagementPageComponent } from './Pages/InnerAdmin/ServicesPages/ProductsPages/products-management-page/products-management-page.component';
import { ClientLandPageComponent } from './Pages/Client/client-land-page/client-land-page.component';
import { HeaderClientComponent } from './Components/header-client/header-client.component';
import { ClientClassRegisterPageComponent } from './Pages/Client/client-class-register-page/client-class-register-page.component';
import { DeleteBranchesComponent } from './Pages/InnerAdmin/BranchShopsPages/BranchesPages/delete-branches/delete-branches.component';
import { ShowInventoryComponent } from './Pages/InnerAdmin/EquipmentPages/InventoryPages/show-inventory/show-inventory.component';
import { DeleteInventoryComponent } from './Pages/InnerAdmin/EquipmentPages/InventoryPages/delete-inventory/delete-inventory.component';
import { ShowEmployeeComponent } from './Pages/InnerAdmin/FormPages/EmployeePages/show-employee/show-employee.component';
import { DeleteEmployeeComponent } from './Pages/InnerAdmin/FormPages/EmployeePages/delete-employee/delete-employee.component';
import { AddEmployeeComponent } from './Pages/InnerAdmin/FormPages/EmployeePages/add-employee/add-employee.component';
import { ShowAllBranchesComponent } from './Pages/InnerAdmin/BranchShopsPages/BranchesPages/show-all-branches/show-all-branches.component';
import { EditBranchesComponent } from './Pages/InnerAdmin/BranchShopsPages/BranchesPages/edit-branches/edit-branches.component';
import { ShowAllInventoryComponent } from './Pages/InnerAdmin/EquipmentPages/InventoryPages/show-all-inventory/show-all-inventory.component';
import { EditInventoryComponent } from './Pages/InnerAdmin/EquipmentPages/InventoryPages/edit-inventory/edit-inventory.component';
import { ShowAllGearComponent } from './Pages/InnerAdmin/EquipmentPages/GearPages/show-all-gear/show-all-gear.component';
import { ShowGearComponent } from './Pages/InnerAdmin/EquipmentPages/GearPages/show-gear/show-gear.component';
import { AddGearComponent } from './Pages/InnerAdmin/EquipmentPages/GearPages/add-gear/add-gear.component';
import { EditGearComponent } from './Pages/InnerAdmin/EquipmentPages/GearPages/edit-gear/edit-gear.component';
import { DeleteGearComponent } from './Pages/InnerAdmin/EquipmentPages/GearPages/delete-gear/delete-gear.component';
import { ShowAllEmployeeComponent } from './Pages/InnerAdmin/FormPages/EmployeePages/show-all-employee/show-all-employee.component';
import { EditEmployeeComponent } from './Pages/InnerAdmin/FormPages/EmployeePages/edit-employee/edit-employee.component';
import { ShowAllPayrollComponent } from './Pages/InnerAdmin/FormPages/PayrollPages/show-all-payroll/show-all-payroll.component';
import { AddPayrollComponent } from './Pages/InnerAdmin/FormPages/PayrollPages/add-payroll/add-payroll.component';
import { EditPayrollComponent } from './Pages/InnerAdmin/FormPages/PayrollPages/edit-payroll/edit-payroll.component';
import { ShowAllProductsComponent } from './Pages/InnerAdmin/ServicesPages/ProductsPages/show-all-products/show-all-products.component';
import { ShowProductsComponent } from './Pages/InnerAdmin/ServicesPages/ProductsPages/show-products/show-products.component';
import { AddProductsComponent } from './Pages/InnerAdmin/ServicesPages/ProductsPages/add-products/add-products.component';
import { DeleteProductsComponent } from './Pages/InnerAdmin/ServicesPages/ProductsPages/delete-products/delete-products.component';
import { EditProductsComponent } from './Pages/InnerAdmin/ServicesPages/ProductsPages/edit-products/edit-products.component';
import { ShowAllServicesComponent } from './Pages/InnerAdmin/ServicesPages/ServicesPages/show-all-services/show-all-services.component';
import { AddServicesComponent } from './Pages/InnerAdmin/ServicesPages/ServicesPages/add-services/add-services.component';
import { DeleteServicesComponent } from './Pages/InnerAdmin/ServicesPages/ServicesPages/delete-services/delete-services.component';
import { EditServicesComponent } from './Pages/InnerAdmin/ServicesPages/ServicesPages/edit-services/edit-services.component';
import { ShopsManagementComponent } from './Pages/InnerAdmin/BranchShopsPages/ShopsPages/shops-management/shops-management.component';
import { EditShopsComponent } from './Pages/InnerAdmin/BranchShopsPages/ShopsPages/edit-shops/edit-shops.component';
import { AllShopsComponent } from './Pages/InnerAdmin/BranchShopsPages/ShopsPages/all-shops/all-shops.component';
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
import { AddClientToClassComponent } from './Pages/Client/add-client-to-class/add-client-to-class.component';
import { ShowAllClassesComponent } from './Pages/Client/show-all-classes/show-all-classes.component';




@NgModule({
  declarations: [
    AppComponent,
    
    FooterComponent,
    MainPageComponent,
    LoginAdminComponent,
    RegisterClientComponent,
    
    AdminLandPageComponent,
    HeaderAdminComponent,
    AdminBranchPageComponent,
    AdminFormPageComponent,
    AdminEquipmentPageComponent,
    AdminServicesPageComponent,

    BranchesManagementPageComponent,
    AddBranchesComponent,

    JobManagementPageComponent,
    PayrollManagementPageComponent,
    EmployeeManagementPageComponent,
    GearManagementComponent,

    InventoryManagementComponent,
    AddInventoryComponent,

    ServicesManagementPageComponent,
    ProductsManagementPageComponent,

    ClientLandPageComponent,
    HeaderClientComponent,
    ClientClassRegisterPageComponent,
    ShowBranchesComponent,
    DeleteBranchesComponent,
    ShowInventoryComponent,
    DeleteInventoryComponent,
    ShowEmployeeComponent,
    DeleteEmployeeComponent,
    AddEmployeeComponent,
    ShowAllBranchesComponent,
    EditBranchesComponent,
    ShowAllInventoryComponent,
    EditInventoryComponent,
    ShowAllGearComponent,
    ShowGearComponent,
    AddGearComponent,
    EditGearComponent,
    DeleteGearComponent,
    ShowAllEmployeeComponent,
    EditEmployeeComponent,
    ShowAllPayrollComponent,
    AddPayrollComponent,
    EditPayrollComponent,
    ShowAllProductsComponent,
    ShowProductsComponent,
    AddProductsComponent,
    DeleteProductsComponent,
    EditProductsComponent,
    ShowAllServicesComponent,
    AddServicesComponent,
    DeleteServicesComponent,
    EditServicesComponent,
    ShopsManagementComponent,
    EditShopsComponent,
    AllShopsComponent,
    LessonsManagementComponent,
    AddLessonsComponent,
    ShowProductsShopsComponent,
    ShowAllSpaComponent,
    EditSpaComponent,
    ShowSpaTreatmentComponent,
    SpaManegementComponent,
    ShowAllJobComponent,
    ShowJobComponent,
    EditJobComponent,
    AddClientToClassComponent,
    ShowAllClassesComponent,


    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
