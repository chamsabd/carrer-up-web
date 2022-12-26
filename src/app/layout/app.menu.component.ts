import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'auth', icon: 'pi pi-fw pi-home', routerLink: ['/auth/signup'] },
                    { label: 'Training Demand', icon: 'pi pi-fw pi-hourglass',routerLink: ['/demandes']},
                    { label: 'Registered', icon: 'pi pi-fw pi-verified',routerLink: ['/demandes/inscrit']}
                ]
            }
        ];
    }
}
