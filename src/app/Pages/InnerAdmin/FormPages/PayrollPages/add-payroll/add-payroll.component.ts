import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-payroll',
  templateUrl: './add-payroll.component.html',
  styleUrls: ['./add-payroll.component.css']
})
export class AddPayrollComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService,
    private router: Router){}

    jsonResponse: any;

    addPayrollForm = this.builder.group({

      ID_Payroll: this.builder.control(0, Validators.required),
      Payroll_Type: this.builder.control('', Validators.required),
      Description: this.builder.control('', Validators.required),
      

    })

    proceedAddPayroll(){
      let formObj = this.addPayrollForm.getRawValue();
      console.log(formObj);
      if(this.addPayrollForm.valid){

        this.service.postAddPayroll(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/']);
        })
      }
      else{
        console.log("Error");
      }
    }

}
