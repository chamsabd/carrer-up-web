import { Component } from '@angular/core';
import {ActivatedRoute } from "@angular/router";
import { User } from 'src/app/api/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Router, ROUTES } from '@angular/router';
@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  
})
export class CodeComponent {
  user:any;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private router: Router,private activatedRoute: ActivatedRoute,public layoutService: LayoutService,private userService: UserService) {
      this.user = JSON.parse(localStorage.getItem("user")!!);
      console.log(this.user);
      
    }

    resetForm(form?: NgForm) {
      if (form != null)
        form.reset();
      this.user = new User()
    }
    OnSubmit(form: NgForm) {
      console.log(form.value);
      this.user.code=form.value.codeverif;
     
      this.userService.saveUser(this.user)
        .subscribe((data: any) => {
          console.log(data);
         // form.value.code=this.user.codeverif;
          if (data.status== 200) {
            this.user=this.userService.body(form.value)
           
  
            this.router.navigate(['/auth/login'
           
          ]​);
         this.resetForm(form);
          }
          else{
            
          }
            
        });
    }
}
