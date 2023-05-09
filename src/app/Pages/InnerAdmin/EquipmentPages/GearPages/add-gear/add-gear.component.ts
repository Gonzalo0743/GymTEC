import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-gear',
  templateUrl: './add-gear.component.html',
  styleUrls: ['./add-gear.component.css']
})
export class AddGearComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService,
    private router: Router){}

    jsonResponse: any;

    addGearForm = this.builder.group({

      Name: this.builder.control('', Validators.required),
      Description: this.builder.control('', Validators.required),
      gear_ID: this.builder.control(0, Validators.required),
      Gear_Type: this.builder.control('',Validators.required),
      

    })
            /**
   * @description This function calls the function of the api to add a new gear to the system
   * @returns A succesfull register of the new gear or an error
   */
    proceedAddGear(){
      let formObj = this.addGearForm.getRawValue();
      console.log(formObj);
      if(this.addGearForm.valid){

        this.service.postAddGear(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/GearManagement']);
        })
      }
      else{
        console.log("Error");
      }
    }

}
