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
      Fname: this.builder.control('', Validators.required),
      Sname: this.builder.control('', Validators.required),
      Lname1: this.builder.control('', Validators.required),
      Lname2: this.builder.control('', Validators.required),
      idNumb: this.builder.control('', Validators.required),
      age: this.builder.control('', Validators.required),
      birthdate: this.builder.control('', Validators.required),
      BMI: this.builder.control('', Validators.required),
      weight: this.builder.control('', Validators.required),
      address: this.builder.control('', Validators.required),
      email: this.builder.control('', Validators.required),
      password: this.builder.control('', Validators.required)

    })

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
  
  



