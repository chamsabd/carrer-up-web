import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { DemandeComponent } from './components/demandes/demande/demande.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,  
                children:[{ path: 'demandes', component: DemandeComponent },]       
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
