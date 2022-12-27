import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,    
                children: [
                    { path: 'stage', loadChildren: () => import('./components/stage/stage.module').then(m => m.StageModule) },
            ]     
            },
            { path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule) },
            
            { path: 'notfound', component: NotfoundComponent },
           // { path: '**', redirectTo: '/notfound' },
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
