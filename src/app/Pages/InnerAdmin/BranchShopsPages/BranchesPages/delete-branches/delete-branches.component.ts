import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-branches',
  templateUrl: './delete-branches.component.html',
  styleUrls: ['./delete-branches.component.css']
})
export class DeleteBranchesComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

  jsonResponse: any;

  /**
   * Form that will be used to send the information to the auth-users.specs.ts
   */

  DeleteBranchesForm = this.builder.group({
  Name: this.builder.control('', Validators.required)})


  /**
   * Function to get the information in the form and send it to a method that will sent it as an HTTPS request
   */
  
  proceedDeleteBranches(){

    let formObj = this.DeleteBranchesForm.getRawValue();

      console.log(formObj);
      
      if(this.DeleteBranchesForm.valid){

        this.service.deleteBranches( this.DeleteBranchesForm.value.Name ).subscribe(item => {

          this.jsonResponse = item;

          if (this.jsonResponse.status == "ok"){

            console.log(this.jsonResponse);

          }else {
            
            this.DeleteBranchesForm.setErrors({ unauthenticated: true });
          }
        })
      }
    }

}
