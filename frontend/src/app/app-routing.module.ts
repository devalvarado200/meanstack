import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSignupComponent } from './components/users/user-signup/user-signup.component';
import { UserLoginComponent } from './components/users/user-login/user-login.component';
import { UserRegisterComponent } from './components/users/user-register/user-register.component';
import { EmployeesComponent } from './components/employees/employees.component';

import { UserAuthGuard } from "./user-auth.guard";

const routes: Routes = [
	{path:"", redirectTo: "users/login", pathMatch: "full"},
	{path:"employees", component: EmployeesComponent, canActivate:[UserAuthGuard]},
	{path:"users/signup", component: UserSignupComponent},
	{path:"users/login", component: UserLoginComponent},
	{path:"users/Register", component: UserRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
