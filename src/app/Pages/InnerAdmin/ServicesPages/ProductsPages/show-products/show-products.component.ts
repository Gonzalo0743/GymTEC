import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

    jsonResponse: any;
    response:any;

    ShowProductsForm = this.builder.group({

      Barcode: this.builder.control('', Validators.required),
      

    })
                /**
   * @description This function calls the function of the api to show a specific shop of the system
   * @returns A succesfull show of the selected shop or an error
   */
    proceedShowProducts(){
      if(this.ShowProductsForm.valid){

        let formObj = this.ShowProductsForm.getRawValue();

        this.service.getProducts(formObj).subscribe(item =>{

          this.jsonResponse = item;

          if (this.jsonResponse.status == "ok"){
            console.log(this.jsonResponse);
            this.response = JSON.stringify(this.jsonResponse);

          }
          else{
            this.ShowProductsForm.setErrors({ unauthenticated: true});
          }
        })
      }
    }
  

}
