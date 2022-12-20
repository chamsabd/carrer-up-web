import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { DemandeComponent } from './components/demandes/demande/demande.component';
import { InscritComponent } from './components/demandes/inscrit/inscrit.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,  
                children:[{ path: 'demandes', component: DemandeComponent },
                { path: 'demandes/inscrit', component: InscritComponent },]       
            },
            { path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule) },
            
            
       //     { path: 'notfound', component: NotfoundComponent },
           // { path: '**', redirectTo: '/notfound' },
        ],{ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
