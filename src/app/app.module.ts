import { NgModule } from '@angular/core';
import {  HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './components/notfound/notfound.component';

import { BrowserModule } from '@angular/platform-browser';
import { DemandeComponent } from './components/demandes/demande/demande.component';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { FormsModule } from '@angular/forms';
import { InscritComponent } from './components/demandes/inscrit/inscrit.component';
import { ToastModule } from 'primeng/toast';
@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, DemandeComponent,InscritComponent
    ],
    imports: [BrowserModule,
        AppRoutingModule,
        AppLayoutModule,
        InputTextModule,
        TableModule,
        DialogModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        FormsModule,
        ToastModule,
    ],

import { HttpClientModule } from '@angular/common/http';
import { FormationComponent } from './components/formations/formation/formation.component';
import { BrowserModule } from '@angular/platform-browser';
import { AddFormationComponent } from './components/formations/add-formation/add-formation.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FormationsListesComponent } from './components/formations/admin/formations-listes/formations-listes.component';

import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DataViewModule } from 'primeng/dataview';
import { PickListModule } from 'primeng/picklist';
import { OrderListModule } from 'primeng/orderlist';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
    declarations: [
        AppComponent, NotfoundComponent,FormationComponent, AddFormationComponent, FormationsListesComponent, 
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        ButtonModule,
        RippleModule,
        AppLayoutModule,
        HttpClientModule,
        BrowserModule,
        FormsModule ,
        ToolbarModule,
        
        RatingModule,
      
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        DataViewModule,
		PickListModule,
		OrderListModule,
		InputTextModule,
		DropdownModule,
		RatingModule,
        ReactiveFormsModule  ,OverlayPanelModule ],

    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
       
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
