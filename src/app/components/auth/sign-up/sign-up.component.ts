import { Component, OnInit } from '@angular/core';
import { User } from '../../../api/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../service/user.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Router, ROUTES } from '@angular/router';
import {ConfirmationService,  MessageService } from 'primeng/api';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  providers: [ConfirmationService, MessageService]

})
export class SignUpComponent implements OnInit {

  
  user: User ={
    confirmpassword: '',
    password: '',
    username: '',
    email: '',
    nom: '',
    prenom: '',
    roles: [],
    code: '',
    codeverif: '',
    id: undefined
  };
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  
  constructor(private router: Router,public layoutService: LayoutService,private userService: UserService,private messageService:MessageService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
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
    }
  }

  OnSubmit(form: NgForm) { 
   this.userService.registerUser(form.value)
      .subscribe({
        next: (data:any) => {
          
            console.log(data);
            
            if (data.status== 200) {
              
              form.value.code=data.body.message;
            this.user=this.userService.body(form.value)
    localStorage.setItem("user",JSON.stringify( this.user));
              this.router.navigate(['/auth/code',
             
            ]​);
          this.resetForm(form);
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
