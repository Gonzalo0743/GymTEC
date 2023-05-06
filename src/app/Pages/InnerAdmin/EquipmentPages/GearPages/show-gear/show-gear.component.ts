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

    proceedShowGear(){
      if(this.ShowGearForm.valid){

        this.service.getGear(this.ShowGearForm.value.gear_ID).subscribe(item =>{

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
