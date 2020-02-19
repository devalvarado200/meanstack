import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../../services/users/users.service";
import { User } from "../../../models/user";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  providers: [UsersService]
})

export class UserLoginComponent implements OnInit {
  user = {};

  constructor(private _usersService:UsersService,private _router:Router) { }

  ngOnInit() {
  }

  login() {
    this._usersService.login(this.user)
      .subscribe(
        res=>{
          localStorage.setItem("token", res["token"]);
          this._router.navigate(["/employees"]);
         },
        err=>console.log(err),)

  }

}
