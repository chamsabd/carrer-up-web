import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandesRoutingModule } from './demandes-routing.module';
import { DemandeComponent } from './demande/demande.component';
import { InscritComponent } from './inscrit/inscrit.component';


@NgModule({
  declarations: [
    DemandeComponent,
    InscritComponent
  ],
  imports: [
    CommonModule,
    DemandesRoutingModule
    
  ]
})
export class DemandesModule { }
