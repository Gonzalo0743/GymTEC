import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all-gear',
  templateUrl: './show-all-gear.component.html',
  styleUrls: ['./show-all-gear.component.css']
})
export class ShowAllGearComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

    jsonResponse: any;
    response:any;

      /**
   * @description This function calls the function of the api to obtain all the gear
   * @returns A list with all the gear
   */
    proceedShowAllGear(){

      this.service.getAllGear().subscribe(item =>{

        this.jsonResponse = item;

        if (this.jsonResponse.status == "ok"){
          console.log(this.jsonResponse);
          this.response = JSON.stringify(this.jsonResponse);
        }
        else{
          console.log("Error");
        }
      })
      
    }

}
