import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-services',
  templateUrl: './edit-services.component.html',
  styleUrls: ['./edit-services.component.css']
})
export class EditServicesComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService,
    private router: Router){}

    jsonResponse: any;

    editServicesForm = this.builder.group({

      ID_Service: this.builder.control('', Validators.required), //PK
      
      Description: this.builder.control('', Validators.required),
      
      

    })
                /**
   * @description This function calls the function of the api to edit a service of the system
   * @returns A succesfull edit of the selected service or an error
   */
    proceedEditServices(){
      let formObj = this.editServicesForm.getRawValue();
      console.log(formObj);
      if(this.editServicesForm.valid){

        this.service.putEditServices(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/ServicesManagement']);
        })
      }
      else{
        console.log("Error");
      }
    }

}
