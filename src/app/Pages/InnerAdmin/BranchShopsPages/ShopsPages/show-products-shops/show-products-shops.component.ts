import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-products-shops',
  templateUrl: './show-products-shops.component.html',
  styleUrls: ['./show-products-shops.component.css']
})
export class ShowProductsShopsComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

  jsonResponse: any;
  response:any;

  ShowProductsShopsForm = this.builder.group({

    Name: this.builder.control('', Validators.required),
    

  })
                /**
   * @description This function calls the function of the api to show a specific product shop of the system
   * @returns A succesfull show of the selected product shop or an error
   */
  proceedShowProductsShops(){
    if(this.ShowProductsShopsForm.valid){

      let formObj = this.ShowProductsShopsForm.getRawValue();

      this.service.getProductShops(formObj).subscribe(item =>{

        this.jsonResponse = item;

        if (this.jsonResponse.status == "ok"){
          console.log(this.jsonResponse);
          this.response = JSON.stringify(this.jsonResponse);

        }
        else{
          this.ShowProductsShopsForm.setErrors({ unauthenticated: true});
        }
      })
    }
  }

}
