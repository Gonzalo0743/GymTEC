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
      

    })

    proceedAddGear(){
      let formObj = this.addGearForm.getRawValue();
      console.log(formObj);
      if(this.addGearForm.valid){

        this.service.postAddGear(formObj).subscribe(item => {
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
