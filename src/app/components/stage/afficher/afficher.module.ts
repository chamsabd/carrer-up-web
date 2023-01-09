import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AfficherComponent } from './afficher.component';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';


import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

import { AfficherRoutingModule } from './afficher-routing.module';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { CalendarModule } from "primeng/calendar";
import { ToastModule } from 'primeng/toast';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SidebarModule } from 'primeng/sidebar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
@NgModule({
    imports: [
      CalendarModule,
      CommonModule,
      DialogModule,
		FormsModule,
      AfficherRoutingModule,
      DataViewModule,
    
      InputTextModule,
      DropdownModule,
      SidebarModule,
      ButtonModule,
      FileUploadModule,
      ToastModule,
      SplitButtonModule,
      ConfirmDialogModule,
      InputSwitchModule
    ],
    declarations: [AfficherComponent]
})
export class AfficherModule { }
