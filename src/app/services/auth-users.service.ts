import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthUsersService {
  rootUrl = "https://localhost:7194/api/";

  constructor(private http:HttpClient) { }

  public postAddClient(data:any){

    return this.http.post(this.rootUrl + 'add_client', data);
  }
}
