import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { FormationComponent } from './components/formations/formation/formation.component';
import { AddFormationComponent } from './components/formations/add-formation/add-formation.component';
import { FormationsListesComponent } from './components/formations/admin/formations-listes/formations-listes.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent, children:[{ path: 'courses/formations', component: FormationComponent },
                { path: 'add', component: AddFormationComponent }
            ]        
            },
            { path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule) },

            {path:'admin/courses', component: FormationsListesComponent}
           
           // { path: '**', redirectTo: '/notfound' },
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
