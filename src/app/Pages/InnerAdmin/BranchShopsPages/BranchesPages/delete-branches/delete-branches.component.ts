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

  constructor(private builder: FormBuilder, private service: AuthUsersService, private router: Router){}

  json: any;

  /**
   * Form that will be used to send the information to the auth-users.specs.ts
   */

  DeleteBranchesForm = this.builder.group({
    Name: this.builder.control('', Validators.required),
  
  })


            /**
   * @description This function calls the function of the api to delete a branch of the system
   * @returns A succesfull delete of the specific branch or an error
   */
  
  proceedDeleteBranches(){
    
      
      if(this.DeleteBranchesForm.valid){

        let formObj = this.DeleteBranchesForm.getRawValue();
        console.log(formObj);

        this.service.deleteBranches(formObj).subscribe(item => {

          this.json = item;

          if (this.json.status == "ok"){

            console.log(this.json);
            this.router.navigate(['/BranchesManagement']);

          }else {
            
            this.DeleteBranchesForm.setErrors({ unauthenticated: true });
            
          }
        })
      }
      else{
        console.log("Error, branch name didnt exist");
      }
    }

}
