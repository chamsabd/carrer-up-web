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
import { LoginComponent } from './components/auth/login/login.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {

                path: '', component: AppLayoutComponent,canActivate: [AuthGuard],
                children: [
                 //{ path: '', redirectTo: '/stage' },
                 { path: '',canActivate: [RolesGuard],  data: { roles: ["ROLE_USER","ROLE_ADMIN","ROLE_RESPONSABLE","ROLE_ADMIN","ROLE_RH"] }, component: FormationComponent },
             
                    { path: 'stage' ,loadChildren: () => import('./components/stage/stage.module').then(m => m.StageModule) },
                  { path: 'user',loadChildren: () => import('./components/users/user.module').then(m => m.UserModule) },
                { path: 'demandes',canActivate: [RolesGuard],  data: { roles: ["ROLE_RESPONSABLE"] }, component: DemandeComponent },
                { path: 'demandes/inscrit',canActivate: [RolesGuard],  data: { roles: ["ROLE_RESPONSABLE"] }, component: InscritComponent },
                { path: 'courses/formations',canActivate: [RolesGuard],  data: { roles: ["ROLE_USER"] }, component: FormationComponent },
                { path: 'add',canActivate: [RolesGuard],  data: { roles: ["ROLE_ADMIN"] }, component: AddFormationComponent },
                {path:'admin/courses',canActivate: [RolesGuard],  data: { roles: ["ROLE_ADMIN"] }, component: FormationsListesComponent},
            ]     

            },
             
            { path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)},
            

            
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ],{ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
