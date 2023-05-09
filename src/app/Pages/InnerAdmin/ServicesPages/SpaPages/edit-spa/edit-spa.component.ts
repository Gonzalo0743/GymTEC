import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-spa',
  templateUrl: './edit-spa.component.html',
  styleUrls: ['./edit-spa.component.css']
})
export class EditSpaComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService,
    private router: Router){}

    jsonResponse: any;

    editSpaForm = this.builder.group({

      Branch_Name: this.builder.control('', Validators.required), //PK

      Status: this.builder.control('', Validators.required),



    })
                /**
   * @description This function calls the function of the api to edit a spa of the system
   * @returns A succesfull edit of the selected spa or an error
   */
    proceedEditSpa(){
      let formObj = this.editSpaForm.getRawValue();
      console.log(formObj);
      if(this.editSpaForm.valid){

        this.service.putEditSpa(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/SpaManagement']);
        })
      }
      else{
        console.log("Error");
      }
    }

}
