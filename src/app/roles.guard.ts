import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {
  
    

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      const role = this.userService.role;
      
      if (route.data['roles'] && route.data['roles'].indexOf(role) === -1) {
        // role not authorised so redirect to home page
        this.router.navigate(['/auth/access']);
        return false;
    }

    // authorised so return true
    return true;
  }
  
}
