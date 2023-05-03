import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent {

  public postJsonValue: any;

  constructor(private http: HttpClient){

  }

  ngOnInit(): void{

  }

  public postMethod(){
    this.http.post('https://localhost:7194/api/add_client', {}).subscribe((data)=>{
      console.log(data);
      this.postJsonValue = data;
    }
    );

  }
  
  

}
