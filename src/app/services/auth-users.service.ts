import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthUsersService {
  //Dirección de Montoya *PREGUNTAR LA DE MAX*
  rootUrl = "https://localhost:7194/api/";

  constructor(private http:HttpClient) { }

  public getClients(email:any, password:any){

    let queryParams = new HttpParams();
    queryParams = queryParams.append("email",email);
    queryParams = queryParams.append("password",password);

    return this.http.get(this.rootUrl + 'auth_cliente',{params:queryParams});
  }


  public getAdmins(email:any, password:any){

    let queryParams = new HttpParams();
    queryParams = queryParams.append("email",email);
    queryParams = queryParams.append("password",password);

    return this.http.get(this.rootUrl + 'auth_employee',{params:queryParams});
  }

  public getBranches(Name:any){

    let queryParams = new HttpParams();
    queryParams = queryParams.append("Name",Name);

    return this.http.get(this.rootUrl + '',{params:queryParams});
  }


  public postAddClient(data:any){

    return this.http.post(this.rootUrl + 'add_client', data);
  }

  public postAddBranches(data:any){

    return this.http.post(this.rootUrl + 'add_branch', data);
  }

  public postAddInventory(data:any){

    return this.http.post(this.rootUrl + 'add_inventory', data);
  }
}
