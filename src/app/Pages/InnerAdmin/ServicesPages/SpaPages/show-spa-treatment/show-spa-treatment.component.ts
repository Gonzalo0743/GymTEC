import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-spa-treatment',
  templateUrl: './show-spa-treatment.component.html',
  styleUrls: ['./show-spa-treatment.component.css']
})
export class ShowSpaTreatmentComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

    jsonResponse: any;
    response:any;

    ShowSpaTreatmentForm = this.builder.group({

      Name: this.builder.control('', Validators.required),
      

    })
                /**
   * @description This function calls the function of the api to show a specific spa treatment of the system
   * @returns A succesfull show of the selected spa treatment or an error
   */
    proceedShowSpaTreatment(){
      if(this.ShowSpaTreatmentForm.valid){

        let formObj = this.ShowSpaTreatmentForm.getRawValue();

        this.service.getSpaTreatment(formObj).subscribe(item =>{

          this.jsonResponse = item;

          if (this.jsonResponse.status == "ok"){
            console.log(this.jsonResponse);
            this.response = JSON.stringify(this.jsonResponse);

          }
          else{
            this.ShowSpaTreatmentForm.setErrors({ unauthenticated: true});
          }
        })
      }
    }

}
