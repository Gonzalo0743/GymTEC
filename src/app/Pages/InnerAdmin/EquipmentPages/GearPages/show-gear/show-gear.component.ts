import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-gear',
  templateUrl: './show-gear.component.html',
  styleUrls: ['./show-gear.component.css']
})
export class ShowGearComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

    jsonResponse: any;
    response:any;

    ShowGearForm = this.builder.group({

      gear_ID: this.builder.control(0, Validators.required),
      

    })
                /**
   * @description This function calls the function of the api to show a specific gear of the system
   * @returns A succesfull show of the selected gear or an error
   */
    proceedShowGear(){
      if(this.ShowGearForm.valid){

        let formObj = this.ShowGearForm.getRawValue();

        this.service.getGear(formObj).subscribe(item =>{
          

          this.jsonResponse = item;

          if (this.jsonResponse.status == "ok"){
            console.log(this.jsonResponse);
            this.response = JSON.stringify(this.jsonResponse);

          }
          else{
            this.ShowGearForm.setErrors({ unauthenticated: true});
          }
        })
      }
    }

}
