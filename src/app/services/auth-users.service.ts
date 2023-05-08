import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthUsersService {
  //Dirección de Montoya *PREGUNTAR LA DE MAX*
  rootUrl = "https://localhost:7194/api/";

  constructor(private http:HttpClient) { }

  //*Gets* for show specific info

  public getClients(data:any){

    return this.http.post(this.rootUrl + 'auth_cliente',data);
  }


  public getAdmins(data:any){

    return this.http.post(this.rootUrl + 'auth_employee',data);
  }

  public getBranches(data:any){

    return this.http.post(this.rootUrl + 'obt_branch',data);
  }

  public getGear(data:any){

    return this.http.post(this.rootUrl + 'obt_gear',data);
  }

  public getInventory(data:any){

    return this.http.post(this.rootUrl + 'obt_inventory',data);
  }

  public getEmployee(data:any){

    return this.http.post(this.rootUrl + 'obt_employee',data);
  }

  public getProducts(data:any){

    return this.http.post(this.rootUrl + 'obt_product',data);
  }

  public getProductShops(data:any){

    return this.http.post(this.rootUrl + 'obt_shop_product',data);
  }

  //*Gets* for show all the names

  public getAllBranches(){

    return this.http.get(this.rootUrl + 'all_branches');
  }

  public getAllGear(){

    return this.http.get(this.rootUrl + 'all_gear');
  }

  public getAllInventory(){

    return this.http.get(this.rootUrl + 'all_inventories');
  }

  public getAllPayroll(){

    return this.http.get(this.rootUrl + 'all_payrolls');
  }

  public getAllProducts(){

    return this.http.get(this.rootUrl + 'all_product');
  }

  public getAllServices(){

    return this.http.get(this.rootUrl + 'all_services');
  }

  public getAllShops(){

    return this.http.get(this.rootUrl + 'all_shop');
  }

  public getAllEmployee(){

    return this.http.get(this.rootUrl + 'all_employee');
  }

  public getAllSpa(){

    return this.http.get(this.rootUrl + 'all_spa');
  }

  

  //*Post* for add info
  public postAddClient(data:any){

    return this.http.post(this.rootUrl + 'add_client', data);
  }

  public postAddEmployee(data:any){

    return this.http.post(this.rootUrl + 'add_employee', data);
  }

  public postAddBranches(data:any){

    return this.http.post(this.rootUrl + 'add_branch', data);
  }

  public postAddInventory(data:any){

    return this.http.post(this.rootUrl + 'add_inventory', data);
  }

  public postAddGear(data:any){

    return this.http.post(this.rootUrl + 'add_gear', data);
  }

  public postAddPayroll(data:any){

    return this.http.post(this.rootUrl + 'add_payroll', data);
  }

  public postAddProducts(data:any){

    return this.http.post(this.rootUrl + 'add_product', data);
  }

  public postAddServices(data:any){

    return this.http.post(this.rootUrl + 'add_service', data);
  }

  public postAddLessons(data:any){

    return this.http.post(this.rootUrl + 'add_lesson', data);
  }
  //*Put* for edit info
  public putEditBranches(data:any){

    return this.http.put(this.rootUrl + 'mod_branch', data);
  }

  public putEditShops(data:any){

    return this.http.put(this.rootUrl + 'mod_shop', data);
  }

  public putEditPayroll(data:any){

    return this.http.put(this.rootUrl + 'mod_payroll', data);
  }

  public putEditEmployee(data:any){

    return this.http.put(this.rootUrl + 'mod_employee', data);
  }

  public putEditGear(data:any){

    return this.http.put(this.rootUrl + 'mod_gear', data);
  }

  public putEditProducts(data:any){

    return this.http.put(this.rootUrl + 'mod_product', data);
  }

  public putEditServices(data:any){

    return this.http.put(this.rootUrl + 'mod_service', data);
  }

  public putEditInventory(data:any){

    return this.http.put(this.rootUrl + 'mod_inventory', data);
  }

  public putEditSpa(data:any){

    return this.http.put(this.rootUrl + 'mod_spa', data);
  }

  //*Delete* for delete info
  public deleteBranches(data:any){

    return this.http.delete(this.rootUrl + 'delete_branch',data);

  }

  public deleteInventory(data:any){

    return this.http.delete(this.rootUrl + 'delete_inventory',data);

  }

  public deleteEmployee(data:any){


    return this.http.delete(this.rootUrl + 'delete_employee',data);

  }

  public deleteGear(data:any){

    return this.http.delete(this.rootUrl + 'delete_gear',data);

  }

  public deleteProducts(data:any){

    return this.http.delete(this.rootUrl + 'delete_product',data);

  }

  public deleteServices(data:any){

    return this.http.delete(this.rootUrl + 'delete_service',data);

  }
}
