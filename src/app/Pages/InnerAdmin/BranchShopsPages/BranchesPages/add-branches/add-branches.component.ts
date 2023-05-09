import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-branches',
  templateUrl: './add-branches.component.html',
  styleUrls: ['./add-branches.component.css']
})
export class AddBranchesComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService,
    private router: Router){}

    jsonResponse: any;

    addBranchesForm = this.builder.group({

      Name: this.builder.control('', Validators.required),
      Province: this.builder.control('', Validators.required),
      District: this.builder.control('', Validators.required),
      Canton: this.builder.control('', Validators.required),
      max_Size: this.builder.control(0, Validators.required),
      opening_Date: this.builder.control('', Validators.required),
      schedule_Attention: this.builder.control('', Validators.required),
      

    })

            /**
   * @description This function calls the function of the api to add a new branch to the system
   * @returns A succesfull register of the new branch or an error
   */
    proceedAddBranches(){
      let formObj = this.addBranchesForm.getRawValue();
      console.log(formObj);
      if(this.addBranchesForm.valid){

        this.service.postAddBranches(formObj).subscribe(item => {
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


