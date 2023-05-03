import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent {

  idAdmin: number | undefined

  constructor(private http: HttpClient){

  }

  postData(){
    let url = "http://httpbin.org/post"

    this.http.post(url,{
      idAdmin: this.idAdmin
    }).toPromise().then((data: any)=> {
      console.log(data)
    })

  

}
}
