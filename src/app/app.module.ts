import { NgModule } from '@angular/core';
import {  HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { FormationComponent } from './components/formations/formation/formation.component';
import { BrowserModule } from '@angular/platform-browser';
import { AddFormationComponent } from './components/formations/add-formation/add-formation.component';
import { ListsessionsComponent } from './components/sessions/listsessions/listsessions.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent,FormationComponent, AddFormationComponent, ListsessionsComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        HttpClientModule,
        BrowserModule,
        FormsModule ,
        ReactiveFormsModule   ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
       
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
