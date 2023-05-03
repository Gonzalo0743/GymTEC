import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent {

  Fname: String | undefined

  constructor(private http: HttpClient){

  }

  postData(){
    let url = "https://localhost:7194/api/add_client"

    this.http.post(url,{
      Fname: this.Fname
    }).toPromise().then((data: any)=> {
      console.log(data)
    })

  

}
  
  

}

