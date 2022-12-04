import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CodeComponent } from './code.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CodeComponent }
    ])],
    exports: [RouterModule]
})
export class CodeRoutingModule { }
