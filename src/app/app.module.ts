import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


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
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
