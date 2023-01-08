import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard } from './auth-guard.guard';
import { RolesGuard } from './roles.guard';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,canActivate: [AuthGuard],
                children: [
                 
                    { path: 'stage',loadChildren: () => import('./components/stage/stage.module').then(m => m.StageModule) },
                    { path: 'user',loadChildren: () => import('./components/users/user.module').then(m => m.UserModule) },
            ]     
            },
            { path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)},
            
            { path: 'notfound', component: NotfoundComponent },
           // { path: '**', redirectTo: '/notfound' },
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
