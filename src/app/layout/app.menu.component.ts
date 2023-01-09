import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }
role="";
    ngOnInit() {

        this.role = UserService.role;
       
        this.model = [
            {
                label: 'Home',
                items: [
                   

                    this.role.includes('ROLE_RH')|| this.role.includes('ROLE_USER')?   { label: 'stage', icon: 'pi pi-fw pi-book', routerLink: ['/stage'] }:'',

                    this.role.includes('ROLE_RESPONSABLE')? 
                    { label: 'Training Demand', icon: 'pi pi-fw pi-hourglass',routerLink: ['/demandes']}:'',
                    this.role.includes('ROLE_RESPONSABLE')?   { label: 'Registered', icon: 'pi pi-fw pi-verified',routerLink: ['/demandes/inscrit']}:'',

                    { label: 'Courses  Training',icon:'pi pi-fw pi-home' ,routerLink: ['/']},
                    
                    
                ],
                
                
            },
         this.role.includes('ROLE_ADMIN')?   {
                label: ' Admin Space',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Available Courses',
                        icon: 'pi pi-fw pi-bookmark',
                        routerLink: ['/admin/courses']
                    }
                    


               ]
            }:'',
        ];
    }
}
