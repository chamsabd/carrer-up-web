
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';

import { UserService } from 'src/app/service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';

import { PassChangeComponent } from './pass-change.component';
import { PassChangeRoutingModule } from './pass-change-routing.module';
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
        PassChangeRoutingModule,
        ToastModule,
    ],
    declarations: [PassChangeComponent],
    providers: [UserService],
})
export class PassChangeModule { }
