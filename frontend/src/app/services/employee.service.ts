import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Employee } from "../models/employee";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee;
  employees: Employee[];

  readonly URL_API = "http://localhost:3000/employee";

  constructor(private _http: HttpClient) {
    this.selectedEmployee = new Employee();
  }

  getEmployees(){
  	return this._http.get(this.URL_API);
  }

  getEmployee(_id:string){
  	return this._http.get(this.URL_API + `/${_id}`);
  }

  createEmployee(employee: Employee){
  	return this._http.post(this.URL_API, employee);
  }

  updateEmployee(employee: Employee){
  	return this._http.put(this.URL_API + `/${employee._id}`, employee);
  }

  deleteEmployee(_id: string){
  	return this._http.delete(this.URL_API + `/${_id}`);
  }

}
