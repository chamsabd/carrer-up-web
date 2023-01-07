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
    var v=false;
  //   this.validate().subscribe(
  //     {
  //       next: (data:any) => {
  //       console.log("data de validation "+data.toString());
        
  //       v= true;
  //       console.log(v);
  //       console.log(v);
  
  // this._isLoggedIn$.next(v)
  //       return true;
      
  //     },
  //     error: (e) =>  {
  //       v=false;
  //       console.log(v);
  
  //       this._isLoggedIn$.next(v)
  //       return false;
      
       
        
  //       }
      
  //     }
  // )

 console.log(!!this.token);
 
  this._isLoggedIn$.next(!!this.token)
   }
  
   get token(): any { 
    return sessionStorage.getItem('token')==null?null:atob (sessionStorage.getItem('token')!) ;
  }
  get role(): any {
    return sessionStorage.getItem('role')==null?null:atob (sessionStorage.getItem('role')!);
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

  sendcode(user:User){

    const body:User=this.body(user);
    let headers = new HttpHeaders({
'Access-Control-Allow-Origin':"*",
'Content-Type':'application/json',
   });
    
 
  
    //  headers.append("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method,"
    //  + " Access-Control-Request-Headers,authorization");
console.log(headers.get('Access-Control-Allow-Origin'));

 return   this.http.post(this.rootUrl + '/sendcode', body,{  observe: 'response' }); 
   
  }
  changepass(user : User){
    const body:User=this.body(user);
    let headers = new HttpHeaders({
'Access-Control-Allow-Origin':"*",
'Content-Type':'application/json',
   });
    
 
  
    //  headers.append("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method,"
    //  + " Access-Control-Request-Headers,authorization");
console.log(headers.get('Access-Control-Allow-Origin'));
 return   this.http.post(this.rootUrl + '/user/'+user.username, body,{  observe: 'response' }); 
   
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


log(){

    sessionStorage.clear();
    this.router.navigate(['/auth/login']);


}

  logout(){
    this.cookieService.deleteAll();
        this.router.navigate(['/auth/login']);
    // this.http.get(this.rootUrl + 'log').subscribe({
    //   next: (data:any) => {
    //   console.log("data de validation "+data.toString());
      
    //     this.cookieService.deleteAll();
    //     this.router.navigate(['/auth/login']);
    // },
    // error: (e) =>  {
    //   this.cookieService.deleteAll();
    
    //   this.router.navigate(['/auth/login']);
      
    //   }
    
    // });
  }
}

