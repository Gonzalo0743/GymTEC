import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService,
    private router: Router){}

    jsonResponse: any;

    addInventoryForm = this.builder.group({

      Branch_Name: this.builder.control('', Validators.required),
      Brand: this.builder.control('', Validators.required),
      Serial_Number: this.builder.control(0, Validators.required),
      Price: this.builder.control('', Validators.required),
      

    })

    proceedAddInventory(){
      let formObj = this.addInventoryForm.getRawValue();
      console.log(formObj);
      if(this.addInventoryForm.valid){

        this.service.postAddInventory(formObj).subscribe(item => {
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
