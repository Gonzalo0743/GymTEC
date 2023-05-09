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

  constructor(private builder: FormBuilder, private service: AuthUsersService, private router: Router){}

  jsonResponse: any;

  /**
   * Form that will be used to send the information to the auth-users.specs.ts
   */

  DeleteGearForm = this.builder.group({
    gear_ID: this.builder.control(0, Validators.required),
  
  })

            /**
   * @description This function calls the function of the api to delete a gear of the system
   * @returns A succesfull delete of the specific gear or an error
   */
  
  proceedDeleteGear(){
      
      if(this.DeleteGearForm.valid){
        let formObj = this.DeleteGearForm.getRawValue();
        console.log(formObj);

        this.service.deleteGear(formObj).subscribe(item => {

          this.jsonResponse = item;

          if (this.jsonResponse.status == "ok"){

            console.log(this.jsonResponse);
            this.router.navigate(['/EquipmentManagement']);

          }else {
            
            this.DeleteGearForm.setErrors({ unauthenticated: true });
          }
        })
      }
    }

}
