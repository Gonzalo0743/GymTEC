import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthUsersService {
  rootUrl = "https://localhost:7194/api/";

  constructor(private http:HttpClient) { }

  public getClients(email:any, password:any){

    let queryParams = new HttpParams();
    queryParams = queryParams.append("email",email);
    queryParams = queryParams.append("password",password);

    //Agregar la extension del get
    return this.http.get(this.rootUrl + '',{params:queryParams});
  }

  public getAdmins(email:any, password:any){

    let queryParams = new HttpParams();
    queryParams = queryParams.append("email",email);
    queryParams = queryParams.append("password",password);

    //Agregar la extension del get
    return this.http.get(this.rootUrl + '',{params:queryParams});
  }

  public postAddClient(data:any){

    return this.http.post(this.rootUrl + 'add_client', data);
  }
}
