const express = require("express");
const Employee = require("../models/Employee.model");

const employeeController = {};

employeeController.getEmployee =  async (req, res) =>{
	const employee = await Employee.find();
	res.json(employee);
};

employeeController.getEmployees =  async (req, res) =>{
	const employees = await Employee.find();
	res.json(employees);
};

employeeController.createEmployee = async (req, res) =>{
	
};

employeeController.editEmployee = async (req, res) =>{
	
};

employeeController.deleteEmployee = async (req, res) =>{
	
};



module.exports = employeeController;