import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

    jsonResponse: any;
    response:any;

    ShowEmployeeForm = this.builder.group({

      Employee_ID: this.builder.control(0, Validators.required),
      

    })

    proceedShowEmployee(){
      if(this.ShowEmployeeForm.valid){

        let formObj = this.ShowEmployeeForm.getRawValue();

        this.service.getEmployee(formObj).subscribe(item =>{

          this.jsonResponse = item;

          if (this.jsonResponse.status == "ok"){
            console.log(this.jsonResponse);
            this.response = JSON.stringify(this.jsonResponse);

          }
          else{
            this.ShowEmployeeForm.setErrors({ unauthenticated: true});
          }
        })
      }
    }

}
