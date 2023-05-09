import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-job',
  templateUrl: './show-job.component.html',
  styleUrls: ['./show-job.component.css']
})
export class ShowJobComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

    jsonResponse: any;
    response:any;

    ShowJobForm = this.builder.group({

      Employee_ID: this.builder.control(0, Validators.required),
      

    })

    proceedShowJob(){
      if(this.ShowJobForm.valid){

        let formObj = this.ShowJobForm.getRawValue();

        this.service.getJob(formObj).subscribe(item =>{

          this.jsonResponse = item;

          if (this.jsonResponse.status == "ok"){
            console.log(this.jsonResponse);
            this.response = JSON.stringify(this.jsonResponse);

          }
          else{
            this.ShowJobForm.setErrors({ unauthenticated: true});
          }
        })
      }
    }

}
