import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSignupComponent } from './components/users/user-signup/user-signup.component';
import { UserLoginComponent } from './components/users/user-login/user-login.component';
import { UserRegisterComponent } from './components/users/user-register/user-register.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { EmployeesComponent } from './components/employees/employees.component';

import { UsersService } from "./services/users/users.service";
import { EmployeesService } from "./services/employees/employees.service";
import { UserAuthGuard } from "./user-auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    UserSignupComponent,
    UserLoginComponent,
    UserRegisterComponent,
    NavbarComponent,
    EmployeesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserAuthGuard, UsersService, EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
