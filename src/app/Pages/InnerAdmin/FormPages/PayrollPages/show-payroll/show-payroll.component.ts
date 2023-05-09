import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-payroll',
  templateUrl: './show-payroll.component.html',
  styleUrls: ['./show-payroll.component.css']
})
export class ShowPayrollComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

    jsonResponse: any;
    response:any;

    ShowPayrollForm = this.builder.group({

      Employee_ID: this.builder.control(0, Validators.required),
      

    })

                    /**
   * @description This function calls the function of the api to show a specific payroll of the system
   * @returns A succesfull show of the selected payroll or an error
   */
    proceedShowPayroll(){
      if(this.ShowPayrollForm.valid){

        let formObj = this.ShowPayrollForm.getRawValue();

        this.service.getPayroll(formObj).subscribe(item =>{

          this.jsonResponse = item;

          if (this.jsonResponse.status == "ok"){
            console.log(this.jsonResponse);
            this.response = JSON.stringify(this.jsonResponse);

          }
          else{
            this.ShowPayrollForm.setErrors({ unauthenticated: true});
          }
        })
      }
    }
}
