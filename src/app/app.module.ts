import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './Components/top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { LoginAdminComponent } from './Pages/login-admin/login-admin.component';
import { RegisterClientComponent } from './Pages/register-client/register-client.component';
import { RegisterAdminComponent } from './Pages/register-admin/register-admin.component';






@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    MainPageComponent,
    LoginAdminComponent,
    RegisterClientComponent,
    RegisterAdminComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
