import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete-inventory',
  templateUrl: './delete-inventory.component.html',
  styleUrls: ['./delete-inventory.component.css']
})
export class DeleteInventoryComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

  jsonResponse: any;

  /**
   * Form that will be used to send the information to the auth-users.specs.ts
   */

  DeleteInventoryForm = this.builder.group({
    Serial_Number: this.builder.control(0, Validators.required)
  })


  /**
   * Function to get the information in the form and send it to a method that will sent it as an HTTPS request
   */
  
  proceedDeleteInventory(){
  
    let formObj = this.DeleteInventoryForm.getRawValue();

      console.log(formObj);
      
      if(this.DeleteInventoryForm.valid){

        this.service.deleteInventory( this.DeleteInventoryForm.value.Serial_Number).subscribe(item => {

          this.jsonResponse = item;

          if (this.jsonResponse.status == "ok"){

            console.log(this.jsonResponse);

          }else {
            
            this.DeleteInventoryForm.setErrors({ unauthenticated: true });
          }
        })
      }
    }

}
