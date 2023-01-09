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
                   

                    { label: 'stage', icon: 'pi pi-fw pi-book', routerLink: ['/stage'] },


                    { label: 'Training Demand', icon: 'pi pi-fw pi-hourglass',routerLink: ['/demandes']},
                    { label: 'Registered', icon: 'pi pi-fw pi-verified',routerLink: ['/demandes/inscrit']},

                    { label: 'Courses  Training',icon:'pi pi-fw pi-home' ,routerLink: ['/courses/formations']},
                    {label :"espace Admin "}
                    
                ],
                
                
            },
            {
                label: ' Admin Space',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Available Courses',
                        icon: 'pi pi-fw pi-bookmark',
                        routerLink: ['/admin/courses']
                    }
                    


                ]
            },
        ];
    }
}
