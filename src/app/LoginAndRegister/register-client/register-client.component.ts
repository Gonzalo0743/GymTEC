import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService,
    private router: Router){}

    jsonResponse: any;

    createClientForm = this.builder.group({

      iD_Client: this.builder.control('', Validators.required),
      address: this.builder.control('', Validators.required),
      weight: this.builder.control(0, Validators.required),
      bmi: this.builder.control(0, Validators.required),
      fname1: this.builder.control('', Validators.required),
      fname2: this.builder.control(''),
      last_name1: this.builder.control('', Validators.required),
      last_name2: this.builder.control(''),
      password: this.builder.control('', Validators.required),
      birth_Date: this.builder.control('', Validators.required),
      email: this.builder.control('', Validators.required),
      

    })
      /**
   * @description This function is to prepare the info of the client to send it to the api 
   * @returns Send the info to the api to create a new client
   */
    proceedAddClient(){
      let formObj = this.createClientForm.getRawValue();
      console.log(formObj);
      if(this.createClientForm.valid){

        this.service.postAddClient(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/']);
        })
      }
      else{
        console.log("Error");
      }
    }

 
}
  
  



