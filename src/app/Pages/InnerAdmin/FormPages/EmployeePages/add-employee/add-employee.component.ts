import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService,
    private router: Router){}

    jsonResponse: any;

    addEmployeeForm = this.builder.group({

      Employee_ID: this.builder.control('', Validators.required),
      Branch_Name: this.builder.control('', Validators.required),
      Employee_Province: this.builder.control('', Validators.required),
      Employee_District: this.builder.control('', Validators.required),
      Employee_Canton: this.builder.control('', Validators.required),
      Employee_Email: this.builder.control('', Validators.required),
      Employee_Password: this.builder.control('', Validators.required),
      Employee_Fname: this.builder.control('', Validators.required),
      Employee_Mname: this.builder.control(''),
      Employee_LName1: this.builder.control('', Validators.required),
      Employee_LName2: this.builder.control(''),
      Employee_Workstation_id: this.builder.control('', Validators.required),
      Employee_payroll_id: this.builder.control('', Validators.required),


    })
            /**
   * @description This function calls the function of the api to add a new employee to the system
   * @returns A succesfull register of the new employee or an error
   */
    proceedAddEmployee(){
      let formObj = this.addEmployeeForm.getRawValue();
      console.log(formObj);
      if(this.addEmployeeForm.valid){

        this.service.postAddEmployee(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/EmployeeManagement']);
        })
      }
      else{
        console.log("Error");
      }
    }

}
