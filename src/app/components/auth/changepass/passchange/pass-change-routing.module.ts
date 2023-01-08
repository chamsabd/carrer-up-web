import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PassChangeComponent } from './pass-change.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: PassChangeComponent }
    ])],
    exports: [RouterModule]
})
export class PassChangeRoutingModule { }
