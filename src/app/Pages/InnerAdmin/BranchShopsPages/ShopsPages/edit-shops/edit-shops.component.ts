import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-shops',
  templateUrl: './edit-shops.component.html',
  styleUrls: ['./edit-shops.component.css']
})
export class EditShopsComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService,
    private router: Router){}

    jsonResponse: any;

    editShopsForm = this.builder.group({

      
      Branch_Name: this.builder.control('', Validators.required),//FK
      
      Status: this.builder.control('', Validators.maxLength(2)),
      
      

    })

    proceedEditShops(){
      let formObj = this.editShopsForm.getRawValue();
      console.log(formObj);
      if(this.editShopsForm.valid){

        this.service.putEditShops(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/ShopsManagement']);
        })
      }
      else{
        console.log("Error");
      }
    }

}
