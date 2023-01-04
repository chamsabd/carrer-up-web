import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
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
console.log("in");



return  this.userService.isLoggedIn$
      .pipe(
        tap((isLoggedIn) => {
          console.log("ath "+isLoggedIn);
          if (!isLoggedIn) {
            this.router.navigateByUrl('/auth/login');
            

         
        }
        else{
          if (route.data['roles'] ) {
            // role not authorised so redirect to home page
            this.router.navigate(['/']);
            return false;
        }
        }
       
        return false;
         
        
        })
      );
      
   
 }


  
}
