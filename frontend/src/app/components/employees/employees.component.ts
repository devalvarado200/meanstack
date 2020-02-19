import { Component, OnInit } from '@angular/core';
import { EmployeesService } from "../../services/employees/employees.service";
import { Employee } from "../../models/employee";
import { NgForm } from "@angular/forms";

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  providers: [EmployeesService]
})
export class EmployeesComponent implements OnInit {

  constructor(private _employeesService:EmployeesService) {
  	 }
 employees = [];
  ngOnInit() {
  	this.getEmployees();
  }

  resetForm(form: NgForm) {
  	if (form){
  		form.reset();
  		this._employeesService.selectedEmployee = new Employee();
  	}
  }

  addEmployee(form: NgForm){
    if (form.value._id) {
      this._employeesService.updateEmployee(form.value)
        .subscribe(res => {
         this.resetForm(form);
          M.toast({html: "Update Successfuly"});
          this.getEmployees();
        });
    } else {
    	this._employeesService.createEmployee(form.value)
    		.subscribe(res => {
    			this.resetForm(form);
    			M.toast({html: "Save Successfuly"});
    			this.getEmployees();
    		});
      }
  }

  getEmployees(){
  	this._employeesService.getEmployees()
  		.subscribe(res => {
  			this._employeesService.employees = res as Employee[];
  		})
  }

  editEmployee(employee: Employee){
    this._employeesService.selectedEmployee = employee;
    // this._employeesService.editEmployee(employee);
  }

  deleteEmployee(_id:string){
     if(confirm("are you sure?")){
         this._employeesService.deleteEmployee(_id)
           .subscribe(res => {
            M.toast({html: "Delete Successfuly"});
          this.getEmployees();
        });
      } else {
        M.toast({html: "Forgot where?"});
      }
    
  }

}
