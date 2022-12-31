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
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FormationsListesComponent } from './components/formations/admin/formations-listes/formations-listes.component';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
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
        ToastModule,
        ToolbarModule,
        DialogModule,
        RatingModule,
        InputTextModule,
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
        ReactiveFormsModule ,TableModule ,OverlayPanelModule ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
       
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
