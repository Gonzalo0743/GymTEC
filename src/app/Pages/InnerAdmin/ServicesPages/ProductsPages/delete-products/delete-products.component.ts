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

  constructor(private builder: FormBuilder, private service: AuthUsersService, private router: Router){}

  jsonResponse: any;

  /**
   * Form that will be used to send the information to the auth-users.specs.ts
   */

  DeleteProductsForm = this.builder.group({
    Barcode: this.builder.control('', Validators.required)})


            /**
   * @description This function calls the function of the api to delete a product of the system
   * @returns A succesfull delete of the specific product or an error
   */
  
  proceedDeleteProducts(){

    let formObj = this.DeleteProductsForm.getRawValue();

      console.log(formObj);
      
      if(this.DeleteProductsForm.valid){

        this.service.deleteProducts(formObj).subscribe(item => {

          this.jsonResponse = item;

          if (this.jsonResponse.status == "ok"){

            console.log(this.jsonResponse);
            this.router.navigate(['/ProductManagement']);

          }else {
            
            this.DeleteProductsForm.setErrors({ unauthenticated: true });
          }
        })
      }
    }

}
