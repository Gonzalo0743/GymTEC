import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

  jsonResponse: any;

  /**
   * Form that will be used to send the information to the auth-users.specs.ts
   */

  DeleteEmployeeForm = this.builder.group({
    Employee_ID: this.builder.control('', Validators.required)})


  /**
   * Function to get the information in the form and send it to a method that will sent it as an HTTPS request
   */
  
  proceedDeleteEmployee(){

    let formObj = this.DeleteEmployeeForm.getRawValue();

      console.log(formObj);
      
      if(this.DeleteEmployeeForm.valid){

        this.service.deleteEmployee( this.DeleteEmployeeForm.value.Employee_ID).subscribe(item => {

          this.jsonResponse = item;

          if (this.jsonResponse.status == "ok"){

            console.log(this.jsonResponse);

          }else {
            
            this.DeleteEmployeeForm.setErrors({ unauthenticated: true });
          }
        })
      }
    }

}
