import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private userService: UserService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to api url
       // const user = this.userService.userValue;
        const isLoggedIn =  this.userService.token;
        console.log(isLoggedIn);
        
    // const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (isLoggedIn) {
            request = request.clone({
                setHeaders: {
                    Authorization:this.userService.token
                }
            });
        }

        return next.handle(request);
    }
}