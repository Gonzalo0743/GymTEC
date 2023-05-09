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

  constructor(private builder: FormBuilder, private service: AuthUsersService, private router: Router){}

  jsonResponse: any;

  /**
   * Form that will be used to send the information to the auth-users.specs.ts
   */

  DeleteInventoryForm = this.builder.group({
    Serial_Number: this.builder.control(0, Validators.required)
  })


            /**
   * @description This function calls the function of the api to delete a inventory of the system
   * @returns A succesfull delete of the specific delete or an error
   */
  
  proceedDeleteInventory(){
  
    let formObj = this.DeleteInventoryForm.getRawValue();

      console.log(formObj);
      
      if(this.DeleteInventoryForm.valid){

        this.service.deleteInventory(formObj).subscribe(item => {

          this.jsonResponse = item;

          if (this.jsonResponse.status == "ok"){

            console.log(this.jsonResponse);
            this.router.navigate(['/EquipmentManagement']);

          }else {
            
            this.DeleteInventoryForm.setErrors({ unauthenticated: true });
          }
        })
      }
    }

}
