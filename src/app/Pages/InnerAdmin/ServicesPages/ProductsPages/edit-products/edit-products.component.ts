import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService,
    private router: Router){}

    jsonResponse: any;

    editProductsForm = this.builder.group({

      Barcode: this.builder.control('', Validators.required),//PK

      Name: this.builder.control('', Validators.required),
      Description: this.builder.control('', Validators.required),
      price: this.builder.control(0, Validators.required),
      branch_Name: this.builder.control('', Validators.required),
      
      

    })

    proceedEditProducts(){
      let formObj = this.editProductsForm.getRawValue();
      console.log(formObj);
      if(this.editProductsForm.valid){

        this.service.putEditProducts(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/']);
        })
      }
      else{
        console.log("Error");
      }
    }

}
