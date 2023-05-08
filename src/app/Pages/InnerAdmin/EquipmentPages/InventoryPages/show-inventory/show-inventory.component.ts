import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-inventory',
  templateUrl: './show-inventory.component.html',
  styleUrls: ['./show-inventory.component.css']
})
export class ShowInventoryComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

    jsonResponse: any;
    response:any;

    ShowInventoryForm = this.builder.group({

      Serial_Number: this.builder.control(0, Validators.required),
      

    })

    proceedShowInventory(){
      if(this.ShowInventoryForm.valid){

        let formObj = this.ShowInventoryForm.getRawValue();

        this.service.getInventory(formObj).subscribe(item =>{

          this.jsonResponse = item;

          if (this.jsonResponse.status == "ok"){
            console.log(this.jsonResponse);
            this.response = JSON.stringify(this.jsonResponse);

          }
          else{
            this.ShowInventoryForm.setErrors({ unauthenticated: true});
          }
        })
      }
    }


}
