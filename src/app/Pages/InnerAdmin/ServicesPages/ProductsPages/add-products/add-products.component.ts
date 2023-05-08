import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  constructor(private builder: FormBuilder, private service: AuthUsersService,
    private router: Router){}

    jsonResponse: any;

    addProductsForm = this.builder.group({

      Barcode: this.builder.control('', Validators.required),
      Name: this.builder.control('', Validators.required),
      Description: this.builder.control('', Validators.required),
      price: this.builder.control(0, Validators.required),
      branch_Name: this.builder.control('', Validators.required),
      
      

    })

    proceedAddProducts(){
      let formObj = this.addProductsForm.getRawValue();
      console.log(formObj);
      if(this.addProductsForm.valid){

        this.service.postAddProducts(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/ProductsManagement']);
        })
      }
      else{
        console.log("Error");
      }
    }

}
