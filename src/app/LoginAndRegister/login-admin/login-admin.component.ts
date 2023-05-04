import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService, 
    private router: Router){}
    
    jsonResponse: any;

    loginAdminForm = this.builder.group({
      email: this.builder.control('', Validators.required),
      password: this.builder.control('', Validators.required)
    })

    proceedAdminLogin(){
      if(this.loginAdminForm.valid){

        this.service.getAdmins(this.loginAdminForm.value.email, this.loginAdminForm.value.password).subscribe(item =>{
          this.jsonResponse = item;

          //Revisar si ese "Ok" se escribe exactamente igual
          if(this.jsonResponse.status == "Ok"){
            this.router.navigate(['/AdminLandPage']);
          }
          else{
            this.loginAdminForm.setErrors({unauthenticated: true});
          }
        })
      }

    }

}
