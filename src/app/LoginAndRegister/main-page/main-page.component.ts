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
    
    jsonResponse: any;

    loginClientForm = this.builder.group({
      email: this.builder.control('', Validators.required),
      password: this.builder.control('', Validators.required)
    })

    proceedClientLogin(){
      if(this.loginClientForm.valid){

        this.service.getClients(this.loginClientForm.value.email, this.loginClientForm.value.password).subscribe(item =>{
          this.jsonResponse = item;

          //Revisar si ese "Ok" se escribe exactamente igual
          if(this.jsonResponse.status == "Ok"){
            this.router.navigate(['/ClientLandPage']);
          }
          else{
            this.loginClientForm.setErrors({unauthenticated: true});
          }
        })
      }

    }



}
