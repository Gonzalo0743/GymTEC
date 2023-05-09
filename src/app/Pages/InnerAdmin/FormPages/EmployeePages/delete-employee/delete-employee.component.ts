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

  constructor(private builder: FormBuilder, private service: AuthUsersService, private router: Router){}

  jsonResponse: any;

  /**
   * Form that will be used to send the information to the auth-users.specs.ts
   */

  DeleteEmployeeForm = this.builder.group({
    Employee_ID: this.builder.control('', Validators.required)})


    /**
   * @description This function calls the function of the api to delete a employee of the system
   * @returns A succesfull delete of the specific employee or an error
   */
  
  proceedDeleteEmployee(){

    let formObj = this.DeleteEmployeeForm.getRawValue();
    console.log(formObj);
      
      if(this.DeleteEmployeeForm.valid){

        this.service.deleteEmployee(formObj).subscribe(item => {

          this.jsonResponse = item;

          if (this.jsonResponse.status == "ok"){

            console.log(this.jsonResponse);
            this.router.navigate(['/EmployeeManagement']);

          }else {
            
            this.DeleteEmployeeForm.setErrors({ unauthenticated: true });
          }
        })
      }
    }

}
