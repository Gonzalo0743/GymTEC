import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-inventory',
  templateUrl: './edit-inventory.component.html',
  styleUrls: ['./edit-inventory.component.css']
})
export class EditInventoryComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService,
    private router: Router){}

    jsonResponse: any;

    editInventoryForm = this.builder.group({

      Branch_Name: this.builder.control('', Validators.required),
      Brand: this.builder.control('', Validators.required),
      Serial_Number: this.builder.control(0, Validators.required),
      Price: this.builder.control('', Validators.required),
      

    })

       /**
   * @description This function calls the function of the api to edit an inventory of the system
   * @returns A succesfull edit of the selected inventory or an error
   */
    proceedEditInventory(){
      let formObj = this.editInventoryForm.getRawValue();
      console.log(formObj);
      if(this.editInventoryForm.valid){

        this.service.putEditInventory(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/InventoryManagement']);
        })
      }
      else{
        console.log("Error");
      }
    }

}
