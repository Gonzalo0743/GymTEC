import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './Components/welcome-page/welcome-page.component';
import { LoginAdminComponent } from './Components/login-admin/login-admin.component';
import { LoginClientComponent } from './Components/login-client/login-client.component';

const routes: Routes = [
  {
    path:'',
    component: WelcomePageComponent
  },
  {
    path:'loginAdmin',
    component: LoginAdminComponent
  },
  {
    path:'loginClient',
    component: LoginClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
