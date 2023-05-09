import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthUsersService {
  

  rootUrl = "https://localhost:7194/api/";

  constructor(private http:HttpClient) { }

  //*Gets* for show specific info
  /**
   * @description This method is used to get the clients to verify the login
   * @param data 
   * @returns Response from the JSON if is correct or not
   */

  public getClients(data:any){

    return this.http.post(this.rootUrl + 'auth_cliente',data);
  }


  /**
   * @description This method is used to get the admins to verify the login
   * @param data 
   * @returns Response from the JSON if is correct or not
   */
  public getAdmins(data:any){

    return this.http.post(this.rootUrl + 'auth_employee',data);
  }

    /**
   * @description This method is used to get a specific branch and its info
   * @param data 
   * @returns The info of the specific branch
   */

  public getBranches(data:any){

    return this.http.post(this.rootUrl + 'obt_branch',data);
  }

    /**
   * @description This method is used to get a specific gear and its info
   * @param data 
   * @returns The info of the specific gear
   */
  public getGear(data:any){

    return this.http.post(this.rootUrl + 'obt_gear',data);
  }

    /**
   * @description This method is used to get a specific inventory and its info
   * @param data 
   * @returns The info of the specific inventory
   */
  public getInventory(data:any){

    return this.http.post(this.rootUrl + 'obt_inventory',data);
  }

    /**
   * @description This method is used to get a specific employee and its info
   * @param data 
   * @returns The info of the specific employee
   */

  public getEmployee(data:any){

    return this.http.post(this.rootUrl + 'obt_employee',data);
  }

    /**
   * @description This method is used to get a specific product and its info
   * @param data 
   * @returns The info of the specific product
   */

  public getProducts(data:any){

    return this.http.post(this.rootUrl + 'obt_product',data);
  }

    /**
   * @description This method is used to get a specific product from the shops and its info
   * @param data 
   * @returns The info of the specific product from the shop
   */

  public getProductShops(data:any){

    return this.http.post(this.rootUrl + 'obt_shop_product',data);
  }

    /**
   * @description This method is used to get a specific job and its info
   * @param data 
   * @returns The info of the specific job
   */

  public getJob(data:any){

    return this.http.post(this.rootUrl + 'obt_jobs',data);
  }

  public getPayroll(data:any){

    return this.http.post(this.rootUrl + 'obt_payroll',data);
  }

  public getSpaTreatment(data:any){

    return this.http.post(this.rootUrl + 'obt_spa_treatment',data);
  }

  //*Gets* for show all the names


  /**
   * @description This method is used to get all the branches of the system
   * @returns A list with all the branches
   */
  public getAllBranches(){

    return this.http.get(this.rootUrl + 'all_branches');
  }

    /**
   * @description This method is used to get all the gear of the system
   * @returns A list with all the gear
   */
  public getAllGear(){

    return this.http.get(this.rootUrl + 'all_gear');
  }
  /**
   * @description This method is used to get all the inventory of the system
   * @returns A list with all the inventory
   */
  public getAllInventory(){

    return this.http.get(this.rootUrl + 'all_inventories');
  }
  /**
   * @description This method is used to get the payroll of the system
   * @returns A list with the payroll
   */
  public getAllPayroll(){

    return this.http.get(this.rootUrl + 'all_payrolls');
  }

    /**
   * @description This method is used to get all the products of the system
   * @returns A list with all the products
   */
  public getAllProducts(){

    return this.http.get(this.rootUrl + 'all_product');
  }

  /**
   * @description This method is used to get all the services of the system
   * @returns A list with all the services
   */
  public getAllServices(){

    return this.http.get(this.rootUrl + 'all_services');
  }

    /**
   * @description This method is used to get all the shops of the system
   * @returns A list with all the shops
   */
  public getAllShops(){

    return this.http.get(this.rootUrl + 'all_shop');
  }

  /**
   * @description This method is used to get all the employees of the system
   * @returns A list with all the employees
   */
  public getAllEmployee(){

    return this.http.get(this.rootUrl + 'all_employee');
  }

    /**
   * @description This method is used to get all the spa of the system
   * @returns A list with all the spa
   */
  public getAllSpa(){

    return this.http.get(this.rootUrl + 'all_spa');
  }

    /**
   * @description This method is used to get all the jobs of the system
   * @returns A list with all the jobs
   */
  public getAllJob(){

    return this.http.get(this.rootUrl + 'all_jobs');
  }

    /**
   * @description This method is used to get all the classes of the system
   * @returns A list with all the classes
   */
  public getAllClasses(){

    return this.http.get(this.rootUrl + 'all_classes');
  }

  

  //*Post* for add info

  /**
   * @description This method is used to add a client to the system
   * @param data 
   * @returns The function to the api to create the client
   */
  public postAddClient(data:any){

    return this.http.post(this.rootUrl + 'add_client', data);
  }

    /**
   * @description This method is used to add an employee to the system
   * @param data 
   * @returns The function to the api to create the employee
   */
  public postAddEmployee(data:any){

    return this.http.post(this.rootUrl + 'add_employee', data);
  }

    /**
   * @description This method is used to add a branch to the system
   * @param data 
   * @returns The function to the api to create the branch
   */
  public postAddBranches(data:any){

    return this.http.post(this.rootUrl + 'add_branch', data);
  }

    /**
   * @description This method is used to add an inventory to the system
   * @param data 
   * @returns The function to the api to create the inventory
   */
  public postAddInventory(data:any){

    return this.http.post(this.rootUrl + 'add_inventory', data);
  }

    /**
   * @description This method is used to add a gear to the system
   * @param data 
   * @returns The function to the api to create the gear
   */
  public postAddGear(data:any){

    return this.http.post(this.rootUrl + 'add_gear', data);
  }

    /**
   * @description This method is used to add a product to the system
   * @param data 
   * @returns The function to the api to create the product
   */
  public postAddProducts(data:any){

    return this.http.post(this.rootUrl + 'add_product', data);
  }

    /**
   * @description This method is used to add a service to the system
   * @param data 
   * @returns The function to the api to create the service
   */
  public postAddServices(data:any){

    return this.http.post(this.rootUrl + 'add_service', data);
  }

    /**
   * @description This method is used to add a lesson to the system
   * @param data 
   * @returns The function to the api to create the lesson
   */
  public postAddLessons(data:any){

    return this.http.post(this.rootUrl + 'add_lesson', data);
  }

    /**
   * @description This method is used to register a client in a class of the system
   * @param data 
   * @returns The function to the api to register the client
   */
  public postRegisterClass(data:any){

    return this.http.post(this.rootUrl + 'add_client_to_lesson', data);
  }


  //*Put* for edit info

    /**
   * @description This method is used to edit a branch of the system
   * @param data 
   * @returns The function to the api to edit the specific branch
   */
  public putEditBranches(data:any){

    return this.http.put(this.rootUrl + 'mod_branch', data);
  }

      /**
   * @description This method is used to edit a shop of the system
   * @param data 
   * @returns The function to the api to edit the specific shop
   */
  public putEditShops(data:any){

    return this.http.put(this.rootUrl + 'mod_shop', data);
  }

      /**
   * @description This method is used to edit a payroll type of the system
   * @param data 
   * @returns The function to the api to edit the specific payroll type
   */
  public putEditPayroll(data:any){

    return this.http.put(this.rootUrl + 'mod_payroll', data);
  }

    /**
   * @description This method is used to edit an employee of the system
   * @param data 
   * @returns The function to the api to edit the specific employee
   */
  public putEditEmployee(data:any){

    return this.http.put(this.rootUrl + 'mod_employee', data);
  }

      /**
   * @description This method is used to edit a gear of the system
   * @param data 
   * @returns The function to the api to edit the specific gear
   */
  public putEditGear(data:any){

    return this.http.put(this.rootUrl + 'mod_gear', data);
  }

      /**
   * @description This method is used to edit a product of the system
   * @param data 
   * @returns The function to the api to edit the specific product
   */
  public putEditProducts(data:any){

    return this.http.put(this.rootUrl + 'mod_product', data);
  }

      /**
   * @description This method is used to edit a service of the system
   * @param data 
   * @returns The function to the api to edit the specific service
   */
  public putEditServices(data:any){

    return this.http.put(this.rootUrl + 'mod_service', data);
  }

      /**
   * @description This method is used to edit an inventory of the system
   * @param data 
   * @returns The function to the api to edit the specific inventory
   */
  public putEditInventory(data:any){

    return this.http.put(this.rootUrl + 'mod_inventory', data);
  }

      /**
   * @description This method is used to edit a spa of the system
   * @param data 
   * @returns The function to the api to edit the specific spa
   */
  public putEditSpa(data:any){

    return this.http.put(this.rootUrl + 'mod_spa', data);
  }

      /**
   * @description This method is used to edit a job of the system
   * @param data 
   * @returns The function to the api to edit the specific job
   */
  public putEditJob(data:any){

    return this.http.put(this.rootUrl + 'mod_job', data);
  }

  //*Delete* for delete info

      /**
   * @description This method is used to delete a branch of the system
   * @param data 
   * @returns The function to the api to delete the specific branch
   */
  public deleteBranches(data:any){
    let address = this.rootUrl + 'delete_branch';
    let Options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
      body: data,
    };
    return this.http.delete(address,Options);

  }

        /**
   * @description This method is used to delete an inventory of the system
   * @param data 
   * @returns The function to the api to delete the specific inventory
   */
  public deleteInventory(data:any){

    let address = this.rootUrl + 'delete_inventory';
    let Options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
      body: data,
    };
    return this.http.delete(address,Options);

  }

  

        /**
   * @description This method is used to delete an employee of the system
   * @param data 
   * @returns The function to the api to delete the specific employee
   */
  public deleteEmployee(data:any){

    let address = this.rootUrl + 'delete_employee';
    let Options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
      body: data,
    };
    return this.http.delete(address,Options);

  }

        /**
   * @description This method is used to delete a gear of the system
   * @param data 
   * @returns The function to the api to delete the specific gear
   */
  public deleteGear(data:any){
    let address = this.rootUrl + 'delete_gear';
    let Options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
      body: data,
    };
    return this.http.delete(address,Options);
  }

        /**
   * @description This method is used to delete a product of the system
   * @param data 
   * @returns The function to the api to delete the specific product
   */
  public deleteProducts(data:any){

    let address = this.rootUrl + 'delete_product';
    let Options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
      body: data,
    };
    return this.http.delete(address,Options);

  }

        /**
   * @description This method is used to delete a service of the system
   * @param data 
   * @returns The function to the api to delete the specific service
   */
  public deleteServices(data:any){

    let address = this.rootUrl + 'delete_service';
    let Options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
      body: data,
    };
    return this.http.delete(address,Options);

  }
}
