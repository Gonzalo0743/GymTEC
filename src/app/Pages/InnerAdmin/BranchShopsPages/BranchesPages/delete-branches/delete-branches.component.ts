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

  json: any;

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

        this.service.deleteBranches(formObj).subscribe(item => {

          this.json = item;

          if (this.json.status == "ok"){

            console.log(this.json);

          }else {
            
            this.DeleteBranchesForm.setErrors({ unauthenticated: true });
            
          }
        })
      }
      else{
        console.log("Error, branch name didnt exist")
        console.log("MANDELE FAYAH");
      }
    }

}
