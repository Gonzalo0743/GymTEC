import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all-services',
  templateUrl: './show-all-services.component.html',
  styleUrls: ['./show-all-services.component.css']
})
export class ShowAllServicesComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

    jsonResponse: any;
    response:any;

    proceedShowAllServices(){

      this.service.getAllServices().subscribe(item =>{

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
