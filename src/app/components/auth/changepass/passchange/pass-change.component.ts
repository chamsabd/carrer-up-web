import { Component } from '@angular/core';
import {ActivatedRoute } from "@angular/router";
import { User } from 'src/app/api/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Router, ROUTES } from '@angular/router';
import {ConfirmationService,  MessageService } from 'primeng/api';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-code',
  templateUrl: './pass-change.component.html',
  providers: [ConfirmationService, MessageService]
})
export class PassChangeComponent {
  user:User ={
    confirmpassword:'',
    password: '',
    username:'',
    email: '',
    nom: '',
    prenom: '',
    roles:[],
    code:'',
    codeverif:'',
    id: undefined
  };
  
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private router: Router,private activatedRoute: ActivatedRoute,public layoutService: LayoutService,private userService: UserService,
  private messageService:  MessageService) {


    if (this.router.getCurrentNavigation()?.extras.state) {
     var routeState = this.router.getCurrentNavigation()?.extras.state;
     console.log(routeState);
     
      if (routeState) {
        this.user = routeState['user']
          ? JSON.parse(routeState['user'])
          : '';
       
      }
    }
    console.log(this.user);
    if (this.user.email=='') {
      this.router.navigate(['/auth/changepass',
              ])
      
    }
      
    }

    resetForm(form?: NgForm) {
      if (form != null)
        form.reset();
      this.user = new User()
    }
    OnSubmit(form: NgForm) {
      console.log(this.user);
      this.userService.changepass(this.user)
      .subscribe({
        next: (data:any) => {
          
            console.log(data);
            
            if (data.status== 200) {
            
              this.router.navigate(['/auth/login',
             ],​);
          this.resetForm(form);
            }
            else{
              this.messageService.add({ severity: 'error', summary: 'erreur', detail: data.body.message });
          
            }
              
      },
      error: (e) =>  {
          console.log(e)
          this.messageService.add({ severity: 'error', summary: 'erreur', detail: e.error.message });
          this.router.navigate(['/auth/changepass',
        ])
          }
        });
          
          
          
          
          
          
          
          
          
          
      
    }
}
