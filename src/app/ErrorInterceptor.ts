import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from './service/user.service';
import { Router } from '@angular/router';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private userService: UserService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const isLoggedIn =  this.userService.token;

        return next.handle(request).pipe(catchError(err => {
            if (isLoggedIn) {
            if ([401,403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
               // this.userService.logout();
                this.router.navigateByUrl('/auth/access');
            }
        }
            
            // const error = err.error.message || err.statusText;
             return throwError(err);
        }))
    }
}