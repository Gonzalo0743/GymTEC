import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all-inventory',
  templateUrl: './show-all-inventory.component.html',
  styleUrls: ['./show-all-inventory.component.css']
})
export class ShowAllInventoryComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

    jsonResponse: any;
    response:any;

            /**
   * @description This function calls the function of the api to obtain all the inventory
   * @returns A list with all the inventory
   */
    proceedShowAllInventory(){

      this.service.getAllInventory().subscribe(item =>{

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
