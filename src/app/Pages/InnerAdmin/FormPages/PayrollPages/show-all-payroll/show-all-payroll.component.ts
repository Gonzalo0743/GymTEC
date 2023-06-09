import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all-payroll',
  templateUrl: './show-all-payroll.component.html',
  styleUrls: ['./show-all-payroll.component.css']
})
export class ShowAllPayrollComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

  jsonResponse: any;
  response:any;

          /**
   * @description This function calls the function of the api to obtain all the payroll types
   * @returns A list with all the payroll types
   */
  proceedShowAllPayroll(){

    this.service.getAllPayroll().subscribe(item =>{

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
