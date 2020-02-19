import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSignupComponent } from './components/users/user-signup/user-signup.component';
import { UserLoginComponent } from './components/users/user-login/user-login.component';
import { UserRegisterComponent } from './components/users/user-register/user-register.component';
import { PrivateTaskComponent } from './components/tasks/private-task/private-task.component';
import { PublicTaskComponent } from './components/tasks/public-task/public-task.component';
import { EmployeesComponent } from './components/employees/employees.component';

const routes: Routes = [
	{path:"", redirectTo: "/tasks/public", pathMatch: "full"},
	{path:"tasks/public", component: PublicTaskComponent},
	{path:"tasks/private", component: PrivateTaskComponent},
	{path:"users/signup", component: UserSignupComponent},
	{path:"users/login", component: UserLoginComponent},
	{path:"users/Register", component: UserRegisterComponent},
	{path:"employees", component: EmployeesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
