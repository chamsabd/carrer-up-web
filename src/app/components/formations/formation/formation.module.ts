import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationComponent } from './formation.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import {  TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';

import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';

//import { Paginator } from 'primeng/paginator/paginator';

@NgModule({
    declarations: [
        FormationComponent,
		
    ],
    imports: [
        CommonModule,
        //Paginator,
		//ToastModule,
		//DialogModule,
		FormsModule,
    	ButtonModule,
		RippleModule,
		SplitButtonModule,
		ToggleButtonModule,
		//TooltipModule,
		InputTextModule,
		ButtonModule,
	OverlayPanelModule,
		TableModule,
		ConfirmDialogModule,
		SidebarModule,
		RippleModule,
		ConfirmPopupModule

    ],


   
})
export class FormationModule { }
