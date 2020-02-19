import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = "http:localhost:4000";
	
  constructor(private _http: HttpClient) { }
}
