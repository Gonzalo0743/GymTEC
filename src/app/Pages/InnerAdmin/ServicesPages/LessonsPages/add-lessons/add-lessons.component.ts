import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUsersService } from 'src/app/services/auth-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-lessons',
  templateUrl: './add-lessons.component.html',
  styleUrls: ['./add-lessons.component.css']
})
export class AddLessonsComponent {

  constructor(private builder: FormBuilder, private service: AuthUsersService,
    private router: Router){}

    jsonResponse: any;

    addLessonsForm = this.builder.group({

      ID_Lessons: this.builder.control(0, Validators.required),
      Branch_Name: this.builder.control('', Validators.required),
      Quotas: this.builder.control(0, Validators.required),
      Type: this.builder.control('', Validators.required),
      instructor_id: this.builder.control('', Validators.required),
      service_id: this.builder.control('', Validators.required),

      search_Date: this.builder.control('', Validators.required),
      search_End: this.builder.control('', Validators.required),
      Start_Date: this.builder.control('', Validators.required),
      Final_Date: this.builder.control('', Validators.required),

      

    })

    proceedAddLessons(){
      let formObj = this.addLessonsForm.getRawValue();
      console.log(formObj);
      if(this.addLessonsForm.valid){

        this.service.postAddLessons(formObj).subscribe(item => {
          this.jsonResponse = item;
          console.log(this.jsonResponse);
          this.router.navigate(['/LessonsManagement']);
        })
      }
      else{
        console.log("Error");
      }
    }

}
