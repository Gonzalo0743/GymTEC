import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-branches',
  templateUrl: './show-branches.component.html',
  styleUrls: ['./show-branches.component.css']
})
export class ShowBranchesComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

    jsonResponse: any;
    response:any;

    ShowBranchesForm = this.builder.group({

      Name: this.builder.control('', Validators.required),
      

    })

    proceedShowBranches(){
      if(this.ShowBranchesForm.valid){

        this.service.getBranches(this.ShowBranchesForm.value.Name).subscribe(item =>{

          this.jsonResponse = item;

          if (this.jsonResponse.status == "ok"){
            console.log(this.jsonResponse);
            this.response = JSON.stringify(this.jsonResponse);

          }
          else{
            this.ShowBranchesForm.setErrors({ unauthenticated: true});
          }
        })
      }
    }

}
