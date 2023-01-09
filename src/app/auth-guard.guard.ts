import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable,map } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserService } from './service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
 
  constructor(private userService: UserService, private router: Router) {
  
    

  }
  


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

var token =this.userService.token;

console.log(token);
var v=!!token;
console.log(v);




  if(!v) {
  
    
    this.router.navigateByUrl('/auth/login');
  }
   else{
    
     
      return true;
        }
        return false;
       
       
         
        
       
    
// return this.userService.validate().pipe(
//   map((data)=>{
//   if(data){
//       return true;
//   }else{
//     this.router.navigateByUrl('/auth/login');
//     return false;
//   }
// }))
      
   
 }


  
}
