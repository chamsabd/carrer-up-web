import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PassCodeComponent } from './pass-code.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: PassCodeComponent }
    ])],
    exports: [RouterModule]
})
export class PassCodeRoutingModule { }
