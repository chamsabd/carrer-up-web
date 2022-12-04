import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../api/user.model';

@Injectable()
export class UserService {
  readonly rootUrl = '/AUTH-SERVER/';
  constructor(private http: HttpClient) { }

body(user : User){
  const body: User = {
    confirmpassword:user.confirmpassword,
    password: user.password,
    email: user.email,
    nom: user.nom,
    roles:user.roles,
    prenom: user.prenom,
    code:user.code
  }
  return body;
}

  registerUser(user : User){
    const body:User=this.body(user);
    let headers = new HttpHeaders({
'Access-Control-Allow-Origin':"*",
'Content-Type':'application/json'
    });
    
 
  
    //  headers.append("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method,"
    //  + " Access-Control-Request-Headers,authorization");
console.log(headers.get('Access-Control-Allow-Origin'));

 return   this.http.post(this.rootUrl + 'code', body,{  observe: 'response' }); 
   
  }
  
  saveUser(user : User){
    const body:User=this.body(user);
    let headers = new HttpHeaders({
'Access-Control-Allow-Origin':"*",
'Content-Type':'application/json'
    });
    
 
  
    //  headers.append("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method,"
    //  + " Access-Control-Request-Headers,authorization");
console.log(headers.get('Access-Control-Allow-Origin'));

 return   this.http.post(this.rootUrl + 'signup', body,{  observe: 'response' }); 
   
  }

}