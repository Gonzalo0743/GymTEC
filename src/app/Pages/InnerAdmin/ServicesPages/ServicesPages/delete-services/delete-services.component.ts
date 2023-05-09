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

  constructor(private builder: FormBuilder, private service: AuthUsersService, private router: Router){}

  jsonResponse: any;

  /**
   * Form that will be used to send the information to the auth-users.specs.ts
   */

  DeleteServicesForm = this.builder.group({
    ID_Service: this.builder.control('', Validators.required)})


      /**
   * @description This function calls the function of the api to delete a service of the system
   * @returns A succesfull delete of the specific service or an error
   */
  
  proceedDeleteServices(){

    let formObj = this.DeleteServicesForm.getRawValue();

      console.log(formObj);
      
      if(this.DeleteServicesForm.valid){

        this.service.deleteServices(formObj).subscribe(item => {

          this.jsonResponse = item;

          if (this.jsonResponse.status == "ok"){

            console.log(this.jsonResponse);
            this.router.navigate(['/ServicesManagement']);

          }else {
            
            this.DeleteServicesForm.setErrors({ unauthenticated: true });
          }
        })
      }
    }

}
