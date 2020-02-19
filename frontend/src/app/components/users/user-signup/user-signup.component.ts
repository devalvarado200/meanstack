import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styles: []
})
export class UserSignupComponent implements OnInit {

  user = {}

  constructor() { }

  ngOnInit() {
  }

  signUp() {
  	console.log(this.user.username);
  	console.log(this.user.password);
  }

}
