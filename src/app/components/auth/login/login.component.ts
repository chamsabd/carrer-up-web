import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/api/user.model';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { UserService } from 'src/app/service/user.service';
import { Router, ROUTES } from '@angular/router';
import {ConfirmationService,  MessageService } from 'primeng/api';
import {CookieService} from 'ngx-cookie-service';
import { tap } from 'rxjs';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `],
     providers: [ConfirmationService, MessageService]

   
})

export class LoginComponent implements OnInit{



    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    valCheck: string[] = ['remember'];

    password!: string;
    user: User = new User;
   
    constructor(private cookieService:CookieService,public router:Router,public layoutService: LayoutService,public userService:UserService,public messageService: MessageService) {
   console.log("cons");
   
      this.userService.isLoggedIn$.pipe(
        tap((isLoggedIn) => {
          console.log(isLoggedIn);
          
          if (isLoggedIn) {
            this.router.navigateByUrl('/');
        }
       
       
      
        
        })
      );
        this.user.password="";
     }
        ngOnInit() {
          
          console.log("init");
      this.userService.validate().subscribe({
        next: (data:any) => {
          this.router.navigateByUrl('/');
      },
      error: (e) =>  {
     
        
        }
      
      });
      
        
    }
   
    OnSubmit(form: NgForm) {
        console.log(form.value);
        this.userService.login(form.value)
        .subscribe({
          next: (data:any) => {
            
              console.log(data);
              
              if (data.status== 200) {
                console.log(data.body);
                
                form.value.code=data.body.message;
                 this.cookieService.set('token', data.body['tokenType'] + " " +data.body['accessToken']);
                this.cookieService.set('role', data.body['roles']);
                this.cookieService.set('id', data.body['id']);
                this.cookieService.set('username', data.body['username']);
                this.cookieService.set('email', data.body['email']);
   
                this.router.navigate(['/']);
          
              }
              else{
                this.messageService.add({ severity: 'error', summary: 'erreur', detail: data.body.message });
            
              }
                
            
       
  
        },
        error: (e) =>  {
            console.log(e)
            
            this.messageService.add({ severity: 'error', summary: 'erreur', detail: e.error.message });
            
            }
          });
        }
        
}
