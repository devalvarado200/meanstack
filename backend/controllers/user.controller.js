const express = require("express");
const User = require("../models/User.model");
const jwt = require("jsonwebtoken");

const userController = {};

userController.loginUser =  async (req, res) =>{
	const { username, password } = req.body;
	const user = await User.findOne({ username });

	if (!user) return res.status(401).send("this username dont exist");

	if (user.password !== password) return res.status(401).send("wrong password");

	const token = jwt.sign({ _id: user._id}, "secretKey");

	return res.status(200).json({token});
};

userController.signupUser =  async (req, res) =>{
	const { username, password } = req.body;
	const user = new User({
		username,
		password
	});
	await user.save();

	const token = jwt.sign({ _id: user._id}, "secretKey");
	return res.status(200).json({token});
};

userController.getUser =  async (req, res) =>{
	const { id }= req.params;

	const user = await User.findById(id);

	res.json(user);
};

userController.getUsers =  async (req, res) =>{
	const users = await User.find();
	res.json(users);
};

userController.editUser = async (req, res) =>{
	const { id } = req.params;
	const user = {
		username: req.body.name,
		password: req.body.password
	};
	await User.findByIdAndUpdate(id, 
		{$set: user},
		{new: true}
	);
	const token = jwt.sign({ _id: user._id}, "secretKey");
	return res.status(200).json({token});
};

userController.deleteUser = async (req, res) =>{
	const { id }= req.params;
	await User.findByIdAndRemove(id);
	res.json({status: 200})
};

module.exports = userController;