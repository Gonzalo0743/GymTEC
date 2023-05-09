import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all-classes',
  templateUrl: './show-all-classes.component.html',
  styleUrls: ['./show-all-classes.component.css']
})
export class ShowAllClassesComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

  jsonResponse: any;
  response:any;

        /**
   * @description This function calls the function of the api to obtain all the classes
   * @returns A list with all the classes
   */
  proceedShowAllClasses(){

    this.service.getAllClasses().subscribe(item =>{

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
