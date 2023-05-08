import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.css']
})
export class AddServicesComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService,
    private router: Router){}

    jsonResponse: any;

    addServicesForm = this.builder.group({

      ID_Service: this.builder.control('', Validators.required),
      Description: this.builder.control('', Validators.required),
      
      

    })

    proceedAddServices(){
      let formObj = this.addServicesForm.getRawValue();
      console.log(formObj);
      if(this.addServicesForm.valid){

        this.service.postAddServices(formObj).subscribe(item => {
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
