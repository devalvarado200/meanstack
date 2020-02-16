import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";
import { Employee } from "../../models/employee";
import { NgForm } from "@angular/forms";

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private _employeeService:EmployeeService) {
  	 }
 employees = [];
  ngOnInit() {
  	this.getEmployees();
  }

  resetForm(form: NgForm) {
  	if (form){
  		form.reset();
  		this._employeeService.selectedEmployee = new Employee();
  	}
  }

  addEmployee(form: NgForm){
    if (form.value._id) {
      this._employeeService.updateEmployee(form.value)
        .subscribe(res => {
         this.resetForm(form);
          M.toast({html: "Update Successfuly"});
          this.getEmployees();
        });
    } else {
    	this._employeeService.createEmployee(form.value)
    		.subscribe(res => {
    			this.resetForm(form);
    			M.toast({html: "Save Successfuly"});
    			this.getEmployees();
    		});
      }
  }

  getEmployees(){
  	this._employeeService.getEmployees()
  		.subscribe(res => {
  			this._employeeService.employees = res as Employee[];
  		})
  }

  editEmployee(employee: Employee){
    this._employeeService.selectedEmployee = employee;
    // this._employeeService.editEmployee(employee);
  }

  deleteEmployee(_id:string){
     if(confirm("are you sure?")){
         this._employeeService.deleteEmployee(_id)
           .subscribe(res => {
            M.toast({html: "Delete Successfuly"});
          this.getEmployees();
        });
      } else {
        M.toast({html: "Forgot where?"});
      }
    
  }

}
