import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { UsersService } from "./services/users/users.service";

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
	constructor(
		private _usersService:UsersService, 
		private _router:Router) { }

  canActivate(): boolean{
  	if (this._usersService.logged()){
  		return true;
  	}

  	this._router.navigate(["/login"])
  	return false;
  }
  
}
