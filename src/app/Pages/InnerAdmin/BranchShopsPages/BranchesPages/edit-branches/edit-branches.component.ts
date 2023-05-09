import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-branches',
  templateUrl: './edit-branches.component.html',
  styleUrls: ['./edit-branches.component.css']
})
export class EditBranchesComponent {
  constructor(private builder: FormBuilder, private service: AuthUsersService,
    private router: Router){}

    jsonResponse: any;

    editBranchesForm = this.builder.group({

      
      Name: this.builder.control('', Validators.required),//PK
      
      Province: this.builder.control('', Validators.required),
      District: this.builder.control('', Validators.required),
      Canton: this.builder.control('', Validators.required),
      max_Size: this.builder.control(0, Validators.required),
      opening_Date: this.builder.control('', Validators.required),
      schedule_Attention: this.builder.control('', Validators.required),
      

    })
    
            /**
   * @description This function calls the function of the api to edit a branch of the system
   * @returns A succesfull edit of the selected branch or an error
   */
    proceedEditBranches(){
      let formObj = this.editBranchesForm.getRawValue();
      console.log(formObj);
      if(this.editBranchesForm.valid){

        this.service.putEditBranches(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/BranchesManagement']);
        })
      }
      else{
        console.log("Error");
      }
    }

}
