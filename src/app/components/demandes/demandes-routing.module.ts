import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'inscrit', loadChildren: () => import('./inscrit/inscrit.module').then(m => m.InscritModule) },
])],
  exports: [RouterModule]
})
export class DemandesRoutingModule { }
