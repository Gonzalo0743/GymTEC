import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-gear',
  templateUrl: './delete-gear.component.html',
  styleUrls: ['./delete-gear.component.css']
})
export class DeleteGearComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

  jsonResponse: any;

  /**
   * Form that will be used to send the information to the auth-users.specs.ts
   */

  DeleteGearForm = this.builder.group({
    gear_ID: this.builder.control(0, Validators.required)})


  /**
   * Function to get the information in the form and send it to a method that will sent it as an HTTPS request
   */
  
  proceedDeleteGear(){

    let formObj = this.DeleteGearForm.getRawValue();

      console.log(formObj);
      
      if(this.DeleteGearForm.valid){

        this.service.deleteGear( this.DeleteGearForm.value.gear_ID).subscribe(item => {

          this.jsonResponse = item;

          if (this.jsonResponse.status == "ok"){

            console.log(this.jsonResponse);

          }else {
            
            this.DeleteGearForm.setErrors({ unauthenticated: true });
          }
        })
      }
    }

}
