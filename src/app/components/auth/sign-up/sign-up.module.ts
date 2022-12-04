
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';

import { SignUpRoutingModule } from "./sign-up-routing.module";
import { UserService } from 'src/app/service/user.service';
import { HttpClientModule } from '@angular/common/http';


import { SignUpComponent } from './sign-up.component';

@NgModule({
    imports: [
        CommonModule,
       
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        SignUpRoutingModule,
        HttpClientModule,
        FormsModule,
     
    ],
    declarations: [SignUpComponent],
    providers: [UserService],
})
export class SignUpModule { }
