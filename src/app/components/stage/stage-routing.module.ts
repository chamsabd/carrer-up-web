import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RolesGuard } from 'src/app/roles.guard';
import { AfficherModule } from './afficher/afficher.module';

@NgModule({
    imports: [RouterModule.forChild([
     
        { path: '',canActivate: [RolesGuard],  data: { roles: ["ROLE_USER","ROLE_ADMIN",'ROLE_RH'] }, loadChildren: () => import('./afficher/afficher.module').then(m => m.AfficherModule )   },
       // { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class StageRoutingModule { }
