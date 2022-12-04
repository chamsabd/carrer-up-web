import { Component, OnInit } from '@angular/core';
import { User } from '../../../api/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../service/user.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Router, ROUTES } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
 
})
export class SignUpComponent implements OnInit {

  
  user: User =new User();
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private router: Router,public layoutService: LayoutService,private userService: UserService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      confirmpassword:'',
      password: '',
      email: '',
      nom: '',
      prenom: '',
      roles:["user"],
      code:''
    }
  }

  OnSubmit(form: NgForm) {
    form.value.roles=["user"];
    
   this.userService.registerUser(form.value)
      .subscribe((data: any) => {
        console.log(data);
        
        if (data.status== 200) {
          
          form.value.code=data.body.message;
        this.user=this.userService.body(form.value)
console.log(JSON.stringify( this.user));

console.log(this.router);
localStorage.setItem("user",JSON.stringify( this.user));
          this.router.navigate(['/auth/code',
         
        ]​);
      this.resetForm(form);
        }
        else{
          
        }
          
      });
  }

}
