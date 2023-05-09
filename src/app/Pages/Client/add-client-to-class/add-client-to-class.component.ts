import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client-to-class',
  templateUrl: './add-client-to-class.component.html',
  styleUrls: ['./add-client-to-class.component.css']
})
export class AddClientToClassComponent {
  constructor(private builder: FormBuilder, private service: AuthUsersService,
    private router: Router){}

    jsonResponse: any;

    RegisterClassForm = this.builder.group({

      client_id: this.builder.control(0, Validators.required),
      lesson_id: this.builder.control(0, Validators.required),
      
    })

      /**
   * @description This function is to prepare the info of the client to send it to the api 
   * @returns The succesfull register or the error
   */
    proceedRegisterClass(){
      let formObj = this.RegisterClassForm.getRawValue();
      console.log(formObj);
      if(this.RegisterClassForm.valid){

        this.service.postRegisterClass(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/ClientClassRegisterPage']);
        })
      }
      else{
        console.log("Error");
      }
    }

}
