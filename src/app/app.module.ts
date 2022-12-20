import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { BrowserModule } from '@angular/platform-browser';
import { DemandeComponent } from './components/demandes/demande/demande.component';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { FormsModule } from '@angular/forms';
import { InscritComponent } from './components/demandes/inscrit/inscrit.component';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, DemandeComponent,InscritComponent
    ],
    imports: [BrowserModule,
        AppRoutingModule,
        AppLayoutModule,
        InputTextModule,
        TableModule,
        DialogModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        FormsModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
       
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
