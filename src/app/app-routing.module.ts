import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard } from './auth-guard.guard';
import { RolesGuard } from './roles.guard';


import { DemandeComponent } from './components/demandes/demande/demande.component';
import { InscritComponent } from './components/demandes/inscrit/inscrit.component';

import { FormationComponent } from './components/formations/formation/formation.component';
import { AddFormationComponent } from './components/formations/add-formation/add-formation.component';
import { FormationsListesComponent } from './components/formations/admin/formations-listes/formations-listes.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {

                path: '', component: AppLayoutComponent,canActivate: [AuthGuard],
                children: [
                 { path: '', redirectTo: '/auth/login' }
                 
                    { path: 'stage',loadChildren: () => import('./components/stage/stage.module').then(m => m.StageModule) },
                    { path: 'user',loadChildren: () => import('./components/users/user.module').then(m => m.UserModule) },
                     { path: 'demandes', component: DemandeComponent },
                { path: 'demandes/inscrit', component: InscritComponent },
                { path: 'courses/formations', component: FormationComponent },
                { path: 'add', component: AddFormationComponent }
            ]     

            },
              {path:'admin/courses', component: FormationsListesComponent}
            { path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)},
            

            { path: '**', redirectTo: '/notfound' },
        ],{ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
