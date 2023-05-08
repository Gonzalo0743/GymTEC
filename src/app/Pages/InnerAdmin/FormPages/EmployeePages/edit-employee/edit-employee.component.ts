import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService,
    private router: Router){}

    jsonResponse: any;

    editEmployeeForm = this.builder.group({

      Employee_ID: this.builder.control('', Validators.required), //PK

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

    proceedEditEmployee(){
      let formObj = this.editEmployeeForm.getRawValue();
      console.log(formObj);
      if(this.editEmployeeForm.valid){

        this.service.putEditEmployee(formObj).subscribe(item => {
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
