import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all-branches',
  templateUrl: './show-all-branches.component.html',
  styleUrls: ['./show-all-branches.component.css']
})
export class ShowAllBranchesComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

    jsonResponse: any;
    response:any;

    proceedShowAllBranches(){

      this.service.getAllBranches().subscribe(item =>{

        this.jsonResponse = item;

        if (this.jsonResponse.status == "ok"){
          console.log(this.jsonResponse);
          this.response = JSON.stringify(this.jsonResponse);
        }
        else{
          console.log("Error");
        }
      })
      
    }

}
