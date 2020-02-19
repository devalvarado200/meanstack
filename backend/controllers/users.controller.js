const express = require("express");
const User = require("../models/User.model");
const jwt = require("jsonwebtoken");

const usersController = {};

usersController.loginUser =  async (req, res) =>{
	const { username, password } = req.body;
	const user = await User.findOne({ username });

	console.log(user);

	if (!user) return res.status(401).send("this username dont exist");

	if (user.password !== password) return res.status(401).send("wrong password");

	const token = jwt.sign({ _id: user._id}, "secretKey");
	console.log(token);
	return res.status(200).json({token});
};

usersController.signupUser =  async (req, res) =>{
	const { username, password } = req.body;
	const user = new User({
		username,
		password
	});
	await user.save();

	const token = jwt.sign({ _id: user._id}, "secretKey");
	return res.status(200).json({token});
};

usersController.getUser =  async (req, res) =>{
	const { id }= req.params;

	const user = await User.findById(id);

	res.json(user);
};

usersController.getUsers =  async (req, res) =>{
	const users = await User.find();
	res.json(users);
};

usersController.editUser = async (req, res) =>{
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

usersController.deleteUser = async (req, res) =>{
	const { id }= req.params;
	await User.findByIdAndRemove(id);
	res.json({status: 200})
};

module.exports = usersController;