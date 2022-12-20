import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandesRoutingModule } from './demandes-routing.module';
import { DemandeComponent } from './demande/demande.component';


@NgModule({
  declarations: [
    DemandeComponent
  ],
  imports: [
    CommonModule,
    DemandesRoutingModule
    
  ]
})
export class DemandesModule { }
