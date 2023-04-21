import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './Components/welcome-page/welcome-page.component';
import { LoginAdminComponent } from './Components/login-admin/login-admin.component';
import { LoginClientComponent } from './Components/login-client/login-client.component';





@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginAdminComponent,
    LoginClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
