import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {  Response } from "@angular/http";
//import {Observable} from 'rxjs';
//import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:8085/AUTH-SERVER';
  constructor(private http: HttpClient) { }

  registerUser(user : User){
    const body: User = {
      confirmpassword:user.confirmpassword,
      password: user.password,
      email: user.email,
      nom: user.nom,
      prenom: user.prenom
    }
    return this.http.post(this.rootUrl + '/api/User/Register', body);
  }

}