import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductsComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService){}

  jsonResponse: any;

  /**
   * Form that will be used to send the information to the auth-users.specs.ts
   */

  DeleteProductsForm = this.builder.group({
    Barcode: this.builder.control('', Validators.required)})


  /**
   * Function to get the information in the form and send it to a method that will sent it as an HTTPS request
   */
  
  proceedDeleteProducts(){

    let formObj = this.DeleteProductsForm.getRawValue();

      console.log(formObj);
      
      if(this.DeleteProductsForm.valid){

        this.service.deleteProducts( this.DeleteProductsForm.value.Barcode ).subscribe(item => {

          this.jsonResponse = item;

          if (this.jsonResponse.status == "ok"){

            console.log(this.jsonResponse);

          }else {
            
            this.DeleteProductsForm.setErrors({ unauthenticated: true });
          }
        })
      }
    }

}
