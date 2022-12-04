
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';

import { UserService } from 'src/app/service/user.service';
import { HttpClientModule } from '@angular/common/http';


import { CodeComponent } from './code.component';
import { CodeRoutingModule } from './code-routing.module';
@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        HttpClientModule,
        FormsModule,
        CodeRoutingModule
    ],
    declarations: [CodeComponent],
    providers: [UserService],
})
export class CodeModule { }
