import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-shops',
  templateUrl: './all-shops.component.html',
  styleUrls: ['./all-shops.component.css']
})
export class AllShopsComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

  jsonResponse: any;
  response:any;

          /**
   * @description This function calls the function of the api to obtain all the shops
   * @returns A list with all the shops
   */
  proceedShowAllShops(){

    this.service.getAllShops().subscribe(item =>{

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
