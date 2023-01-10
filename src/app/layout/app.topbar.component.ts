import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { UserService } from '../service/user.service';
import { LayoutService } from "./service/app.layout.service";
import { Router } from '@angular/router';
@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit{
    constructor(private userservice: UserService,public layoutService: LayoutService, private router: Router) { }
    ngOnInit(): void {
      
    }

    logout() {
       console.log("log out");
       this.userservice.log()
     }
   items = [
        { label: 'log out ', icon: 'pi pi-sign-out',command: () => {
            this.logout();}  },
        { label: 'change compte', icon: 'pi pi-user-edit' }
    ];
    // items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    
}
