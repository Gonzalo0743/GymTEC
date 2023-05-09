import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService,
    private router: Router){}

    jsonResponse: any;

    editJobForm = this.builder.group({

      Employee_ID: this.builder.control('', Validators.required), //PK

      Employee_Workstation_id: this.builder.control('', Validators.required),


    })

    proceedEditJob(){
      let formObj = this.editJobForm.getRawValue();
      console.log(formObj);
      if(this.editJobForm.valid){

        this.service.putEditJob(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/JobManagement']);
        })
      }
      else{
        console.log("Error");
      }
    }

}
