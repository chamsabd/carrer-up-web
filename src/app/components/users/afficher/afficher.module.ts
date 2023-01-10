import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AfficherComponent } from './afficher.component';
import { AfficherRoutingModule } from './afficher-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MultiSelectModule } from "primeng/multiselect";
@NgModule({
    imports: [
      CommonModule,
      AfficherRoutingModule,
      FormsModule,
      TableModule,
      DialogModule,
      ButtonModule,
      MultiSelectModule,
      InputTextModule,
      ToggleButtonModule,
      RippleModule,
    
  
    
      ToastModule
    ],
    declarations: [AfficherComponent]
})
export class AfficherModule { }
