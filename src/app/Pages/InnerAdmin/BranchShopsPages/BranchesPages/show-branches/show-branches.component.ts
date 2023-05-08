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

    json: any;
    response:any;

    ShowBranchesForm = this.builder.group({

      Name: this.builder.control('', Validators.required),
      

    })

    proceedShowBranches(){
      if(this.ShowBranchesForm.valid){

        let formObj = this.ShowBranchesForm.getRawValue();

        this.service.getBranches(formObj).subscribe(item =>{

          this.json = item;

          if (this.json.status == "ok"){
            console.log(this.json);
            this.response = JSON.stringify(this.json);

          }
          else{
            this.ShowBranchesForm.setErrors({ unauthenticated: true});
          }
        })
      }
    }

}
