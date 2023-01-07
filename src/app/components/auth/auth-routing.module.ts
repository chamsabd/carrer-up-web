import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth-guard.guard';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
        { path: 'access',  loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
        { path: '',  loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
        { path: 'login',  loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
        { path: 'signup', loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule) },
        { path: 'code', loadChildren: () => import('./sign-up/code/code.module').then(m => m.CodeModule) },
        { path: 'changepass', loadChildren: () => import('./changepass/code/pass-code.module').then(m => m.PassCodeModule) },
        { path: 'passcode', loadChildren: () => import('./changepass/change-pass.module').then(m => m.ChangePassModule) },
       
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
