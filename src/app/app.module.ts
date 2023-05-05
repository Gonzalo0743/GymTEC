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
import { RegisterAdminComponent } from './LoginAndRegister/register-admin/register-admin.component';

import { AdminLandPageComponent } from './Pages/Admin/admin-land-page/admin-land-page.component';
import { AdminBranchPageComponent } from './Pages/Admin/admin-branch-page/admin-branch-page.component';
import { AdminFormPageComponent } from './Pages/Admin/admin-form-page/admin-form-page.component';
import { AdminEquipmentPageComponent } from './Pages/Admin/admin-equipment-page/admin-equipment-page.component';
import { AdminServicesPageComponent } from './Pages/Admin/admin-services-page/admin-services-page.component';

import { BranchesManagementPageComponent } from './Pages/InnerAdmin/BranchGymPages/BranchesPages/branches-management-page/branches-management-page.component';
import { AddBranchesComponent } from './Pages/InnerAdmin/BranchGymPages/BranchesPages/add-branches/add-branches.component';
import { ShowBranchesComponent } from './Pages/InnerAdmin/BranchGymPages/BranchesPages/show-branches/show-branches.component';

import { GymsManagementPageComponent } from './Pages/InnerAdmin/BranchGymPages/gyms-management-page/gyms-management-page.component';
import { JobManagementPageComponent } from './Pages/InnerAdmin/FormPages/job-management-page/job-management-page.component';
import { PayrollManagementPageComponent } from './Pages/InnerAdmin/FormPages/payroll-management-page/payroll-management-page.component';
import { EmployeeManagementPageComponent } from './Pages/InnerAdmin/FormPages/employee-management-page/employee-management-page.component';

import { GearManagementComponent } from './Pages/InnerAdmin/EquipmentPages/gear-management/gear-management.component';

import { InventoryManagementComponent } from './Pages/InnerAdmin/EquipmentPages/InventoryPages/inventory-management/inventory-management.component';
import { AddInventoryComponent } from './Pages/InnerAdmin/EquipmentPages/InventoryPages/add-inventory/add-inventory.component';

import { SpaTreatmentManagementPageComponent } from './Pages/InnerAdmin/ServicesPages/spa-treatment-management-page/spa-treatment-management-page.component';
import { ServicesManagementPageComponent } from './Pages/InnerAdmin/ServicesPages/services-management-page/services-management-page.component';
import { ProductsManagementPageComponent } from './Pages/InnerAdmin/ServicesPages/products-management-page/products-management-page.component';
import { ClientLandPageComponent } from './Pages/Client/client-land-page/client-land-page.component';
import { HeaderClientComponent } from './Components/header-client/header-client.component';
import { ClientClassRegisterPageComponent } from './Pages/Client/client-class-register-page/client-class-register-page.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainPageComponent,
    LoginAdminComponent,
    RegisterClientComponent,
    RegisterAdminComponent,
    
    AdminLandPageComponent,
    HeaderAdminComponent,
    AdminBranchPageComponent,
    AdminFormPageComponent,
    AdminEquipmentPageComponent,
    AdminServicesPageComponent,

    BranchesManagementPageComponent,
    AddBranchesComponent,

    GymsManagementPageComponent,
    JobManagementPageComponent,
    PayrollManagementPageComponent,
    EmployeeManagementPageComponent,
    GearManagementComponent,

    InventoryManagementComponent,
    AddInventoryComponent,

    SpaTreatmentManagementPageComponent,
    ServicesManagementPageComponent,
    ProductsManagementPageComponent,

    
    ClientLandPageComponent,
    HeaderClientComponent,
    ClientClassRegisterPageComponent,
    ShowBranchesComponent,


    
    
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
