
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';

import { ChangePassRoutingModule } from "./change-pass-routing.module";
import { UserService } from 'src/app/service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';

import { ChangePassComponent } from './change-pass.component';

@NgModule({
    imports: [
        CommonModule,
        ToastModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        ChangePassRoutingModule,
        HttpClientModule,
        FormsModule,
     
    ],
    declarations: [ChangePassComponent],
    providers: [UserService],
})
export class ChangePassModule { }
