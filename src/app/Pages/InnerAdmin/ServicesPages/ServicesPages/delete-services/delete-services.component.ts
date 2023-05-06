import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-services',
  templateUrl: './delete-services.component.html',
  styleUrls: ['./delete-services.component.css']
})
export class DeleteServicesComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

  jsonResponse: any;

  /**
   * Form that will be used to send the information to the auth-users.specs.ts
   */

  DeleteServicesForm = this.builder.group({
    ID_Service: this.builder.control('', Validators.required)})


  /**
   * Function to get the information in the form and send it to a method that will sent it as an HTTPS request
   */
  
  proceedDeleteServices(){

    let formObj = this.DeleteServicesForm.getRawValue();

      console.log(formObj);
      
      if(this.DeleteServicesForm.valid){

        this.service.deleteServices( this.DeleteServicesForm.value.ID_Service ).subscribe(item => {

          this.jsonResponse = item;

          if (this.jsonResponse.status == "ok"){

            console.log(this.jsonResponse);

          }else {
            
            this.DeleteServicesForm.setErrors({ unauthenticated: true });
          }
        })
      }
    }

}
