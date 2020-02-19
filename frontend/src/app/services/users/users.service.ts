import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../../models/user";
import { UsersService } from "../../../services/users/users.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: User;
  users: User[];

  readonly URL = "http://localhost:4000/users";
	
  constructor(private _http: HttpClient) { 
  	this.user = new User();
  }
	  
  signUp(user: User){
  	return this._http.post(this.URL + "/signup", user);
  }

  login(user: User){
  	return this._http.post(this.URL + "/login", user);
  }

  logged():boolean{
  	return !!localStorage.getItem("token");
  }



  }
