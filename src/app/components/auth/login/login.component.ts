import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/api/user.model';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { UserService } from 'src/app/service/user.service';
import { Router, ROUTES } from '@angular/router';
import {ConfirmationService,  MessageService } from 'primeng/api';
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
   
    constructor(public router:Router,public layoutService: LayoutService,public userService:UserService,public messageService: MessageService) {
  
 var t=  !!this.userService.token
if (t) {
  this.router.navigate(['/']);
  
}

        this.user.password="";
     }
        ngOnInit() {
          
       
      
        
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
                
                sessionStorage.setItem('token',btoa (data.body['tokenType'] + " " +data.body['accessToken']));
                sessionStorage.setItem('role',btoa (data.body['roles']));
                sessionStorage.setItem('id',btoa (data.body['id']));
                sessionStorage.setItem('username',btoa (data.body['username']));
                sessionStorage.setItem('email',btoa (data.body['email']));
   
                this.router.navigate(['/']);
          
              }
              else{
                console.log(data.body);
                
                this.messageService.add({ severity: 'error', summary: 'erreur', detail: data.body.message });
            
              }
                
        },
        error: (e) =>  {
          console.log("e "+JSON.stringify(e.status))
            
            this.messageService.add({ severity: 'error', summary: 'erreur', detail: e.status==401?"false credantials":JSON.stringify(e.error.message) });
            
            }
          });
        }
        
}
