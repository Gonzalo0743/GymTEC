import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-gear',
  templateUrl: './edit-gear.component.html',
  styleUrls: ['./edit-gear.component.css']
})
export class EditGearComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService,
    private router: Router){}

    jsonResponse: any;

    editGearForm = this.builder.group({

      Name: this.builder.control('', Validators.required),
      Description: this.builder.control('', Validators.required),
      
      gear_ID: this.builder.control(0, Validators.required),//PK

      Gear_Type: this.builder.control('',Validators.required),
      

    })

    proceedEditGear(){
      let formObj = this.editGearForm.getRawValue();
      console.log(formObj);
      if(this.editGearForm.valid){

        this.service.putEditGear(formObj).subscribe(item => {
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
