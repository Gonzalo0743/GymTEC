import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-payroll',
  templateUrl: './edit-payroll.component.html',
  styleUrls: ['./edit-payroll.component.css']
})
export class EditPayrollComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService,
    private router: Router){}

    jsonResponse: any;

    editPayrollForm = this.builder.group({

      ID_Payroll: this.builder.control(0, Validators.required),
      Payroll_Type: this.builder.control('', Validators.required),
      Description: this.builder.control('', Validators.required),
      

    })

    proceedEditPayroll(){
      let formObj = this.editPayrollForm.getRawValue();
      console.log(formObj);
      if(this.editPayrollForm.valid){

        this.service.putEditPayroll(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/PayrollManagement']);
        })
      }
      else{
        console.log("Error");
      }
    }

}
