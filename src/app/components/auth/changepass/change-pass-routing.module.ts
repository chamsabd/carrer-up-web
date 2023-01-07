import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChangePassComponent } from './change-pass.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ChangePassComponent }
    ])],
    exports: [RouterModule]
})
export class ChangePassRoutingModule { }
