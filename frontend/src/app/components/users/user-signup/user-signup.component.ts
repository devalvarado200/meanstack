import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../../services/users/users.service";
import { User } from "../../../models/user";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  providers: [UsersService]
})
export class UserSignupComponent implements OnInit {

  //  user = new User();
  user = {}

  constructor(
    private _usersService:UsersService, 
    private _router:Router
    ) { }

  ngOnInit() {
  }

  signUp() {
    this._usersService.signUp(this.user)
      .subscribe(
        res=>{
          localStorage.setItem("token", res["token"]);
          this._router.navigate(["/employees"]);
         },
        err=>console.log(err),)

  }

}
