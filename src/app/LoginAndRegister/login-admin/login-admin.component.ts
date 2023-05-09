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
    
    json: any;

    loginAdminForm = this.builder.group({
      ID_Credentials: this.builder.control('', Validators.required),
      Password: this.builder.control('', Validators.required)
    })

      /**
   * @description This function is to prepare the info of the admin to send it to the api 
   * @returns The login to the page or the error of the login
   */
    proceedAdminLogin(){
      if(this.loginAdminForm.valid){

        let formObj = this.loginAdminForm.getRawValue();

        this.service.getAdmins(formObj).subscribe(item =>{
          this.json = item;
          

          //Revisar si ese "Ok" se escribe exactamente igual
          if(this.json.status == "ok"){
            this.router.navigate(['/AdminLandPage']);
            console.log("Login Succesfull");
          }
          else{
            this.loginAdminForm.setErrors({unauthenticated: true});
          }
        })
      }

    }

}
