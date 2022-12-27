import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageRoutingModule } from './stage-routing.module';
import { DataViewModule } from 'primeng/dataview';
import { PickListModule } from 'primeng/picklist';
import { OrderListModule } from 'primeng/orderlist';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
//import { AfficherComponent } from './afficher/afficher.component';
@NgModule({
    imports: [
        CommonModule, 
        StageRoutingModule
        ,DataViewModule,
		PickListModule,
		OrderListModule,
		InputTextModule,
		DropdownModule,
		RatingModule,
		ButtonModule
    ]
})
export class StageModule { }