import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { User } from '../api/user.model';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';
import { Router, UrlTree } from '@angular/router';

@Injectable()
export class UserService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  readonly rootUrl = '/auth-server/';
  constructor(private http: HttpClient,private cookieService: CookieService, private router: Router) {
  
 this._isLoggedIn$.next(!!this.token)
    
   }
   public async  isLoggedIn(): Promise<boolean> {
    // Check whether the user is loggedin or not
    return this.validatetoken();
  }
   get token(): any {
    this.validatetoken

    return this.cookieService.get('token');
  }
  get role(): any {
    return  this.cookieService.get('role');
  }

body(user : User){
  const body: User = {
    confirmpassword:user.confirmpassword,
    password: user.password,
    email: user.email,
    username: user.username,
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

 return   this.http.post(this.rootUrl + 'code', user,{  observe: 'response' }); 
   
  }
  
  saveUser(user : User){
    const body:User=this.body(user);
    let headers = new HttpHeaders({
'Access-Control-Allow-Origin':"*",
'Content-Type':'application/json',
   });
    
 
  
    //  headers.append("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method,"
    //  + " Access-Control-Request-Headers,authorization");
console.log(headers.get('Access-Control-Allow-Origin'));

 return   this.http.post(this.rootUrl + 'signup', body,{  observe: 'response' }); 
   
  }

  login(user : User){
    const body:User=this.body(user);
    let headers = new HttpHeaders({
'Access-Control-Allow-Origin':"*",
'Content-Type':'application/json'
    });
    
 
  
    //  headers.append("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method,"
    //  + " Access-Control-Request-Headers,authorization");
console.log(headers.get('Access-Control-Allow-Origin'));

 return   this.http.post(this.rootUrl + 'signin', body,{  observe: 'response' }).pipe(
  tap((response: any) => {
    this._isLoggedIn$.next(true);
     
  })
);
   
  }

    validate(){
     
    var token= this.cookieService.get('token')??"";
             console.log(token);
             
    let headers = new HttpHeaders({
'Access-Control-Allow-Origin':"*",
'Content-Type':'application/json',
"Authorization":token
    });
    
 
  
    //  headers.append("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method,"
    //  + " Access-Control-Request-Headers,authorization");
console.log(headers.get('Access-Control-Allow-Origin'));

return this.http.get(this.rootUrl + 'api/v1/validateToken',{headers:headers})


   
  }

  async validatetoken():Promise<boolean>{
     
    var token= this.cookieService.get('token')??"";
             console.log(token);
             
    let headers = new HttpHeaders({
'Access-Control-Allow-Origin':"*",
'Content-Type':'application/json',
"Authorization":token
    });
    
 
  
    //  headers.append("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method,"
    //  + " Access-Control-Request-Headers,authorization");
console.log(headers.get('Access-Control-Allow-Origin'));
var value=false;
 await this.http.get(this.rootUrl + 'api/v1/validateToken',{headers:headers}).subscribe({
  next: (data:any) => {
  console.log(data);
  if (data) {
    value= true;
  }
  
  return true;

},
error: (e) =>  {
  value=false;
  return false;


  
  }

});
return value


   
  }
}

