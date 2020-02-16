const express = require("express");
const Employee = require("../models/Employee.model");

const employeeController = {};

employeeController.getEmployee =  async (req, res) =>{
	const { id }= req.params;
	const employee = await Employee.findById(id);

	res.json(employee);
};

employeeController.getEmployees =  async (req, res) =>{
	const employees = await Employee.find();
	res.json(employees);
};

employeeController.createEmployee = async (req, res) =>{
	const employee = new Employee({
		name: req.body.name,
		position: req.body.position,
		office: req.body.office,
		salary: req.body.salary
	});
	await employee.save();
	res.json({status: 200})
};

employeeController.editEmployee = async (req, res) =>{
	const { id }= req.params;
	const employee = {
		name: req.body.name,
		position: req.body.position,
		office: req.body.office,
		salary: req.body.salary
	}
	await Employee.findByIdAndUpdate(id, 
		{$set: employee},
		{new: true}
	);
	res.json({status: 200})
};

employeeController.deleteEmployee = async (req, res) =>{
	const { id }= req.params;
	await Employee.findByIdAndRemove(id);
	res.json({status: 200})
};



module.exports = employeeController;