import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AfficherModule } from './afficher/afficher.module';

@NgModule({
    imports: [RouterModule.forChild([
     
        { path: '', loadChildren: () => import('./afficher/afficher.module').then(m => m.AfficherModule )   },

       
       // { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class StageRoutingModule { }
