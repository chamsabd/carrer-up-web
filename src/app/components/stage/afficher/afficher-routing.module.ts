import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AfficherComponent } from './afficher.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AfficherComponent }
    ])],
    exports: [RouterModule]
})
export class AfficherRoutingModule { }
