import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService, 
    private router: Router){}
    
    json: any;

    loginClientForm = this.builder.group({
      ID_Credentials: this.builder.control('', Validators.required),
      Password: this.builder.control('', Validators.required)
    })
      /**
   * @description This function is to prepare the info of the client to send it to the api 
   * @returns The login to the page or the error of the login
   */
    proceedClientLogin(){
      if(this.loginClientForm.valid){

        let formObj = this.loginClientForm.getRawValue();

        this.service.getClients(formObj).subscribe(item =>{
          this.json = item;
          console.log(this.json);

          //Revisar si ese "Ok" se escribe exactamente igual
          if(this.json.status == "ok"){
            this.router.navigate(['/ClientLandPage']);
            console.log("Login Succesfull");

          }
          else{
            this.loginClientForm.setErrors({unauthenticated: true});
          }
        })
      }

    }



}
