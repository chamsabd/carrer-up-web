import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
//import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { User } from 'src/app/api/user.model';
import { UserService } from 'src/app/service/user.service';
import { Table } from 'primeng/table';
import {saveAs} from "file-saver";

import {ConfirmationService,  MessageService } from 'primeng/api';
import { DatePipe } from '@angular/common';
@Component({
    selector: 'app-afficher',
    templateUrl: './afficher.component.html',
    providers: [ConfirmationService, MessageService,DatePipe]


})
  
export class AfficherComponent implements OnInit {
   
   
    constructor(private userService: UserService,private messageService:MessageService, private confirmationService:ConfirmationService) {
      
     }
 

      id:String=""
     

      userDialog: boolean = false;

      deleteUserDialog: boolean = false;
  
      deleteUsersDialog: boolean = false;
  
      users: User[] = [];
  
      user: User = {
        id:undefined,
          nom: undefined,
          prenom: undefined,
          username: undefined,
          email: undefined,
          roles: undefined,
          password: undefined,
          confirmpassword: undefined,
          code: undefined
      };
  
      selectedUsers: User[] = [];
  
      submitted: boolean = false;
  
      cols: any[] = [];
  
      statuses: any[] = [];
  
      rowsPerPageOptions = [5, 10, 20];
  
      ngOnInit() {
         // this.userService.getUsers().then(data => this.users = data);
  this.getusers();
          this.cols = [
              { field: 'user', header: 'User' },
              { field: 'price', header: 'Price' },
              { field: 'category', header: 'Category' },
              { field: 'rating', header: 'Reviews' },
              { field: 'inventoryStatus', header: 'Status' }
          ];
  
          this.statuses = [
              { label: 'INSTOCK', value: 'instock' },
              { label: 'LOWSTOCK', value: 'lowstock' },
              { label: 'OUTOFSTOCK', value: 'outofstock' }
          ];
      }
  
      openNew() {
          this.user = new User();
          this.submitted = false;
          this.userDialog = true;
      }
  
      deleteSelectedUsers() {
          this.deleteUsersDialog = true;
      }
  
      editUser(user: User) {
          this.user = { ...user };
          this.userDialog = true;
      }
  
      deleteUser(user: User) {
          this.deleteUserDialog = true;
          this.user = { ...user };
      }
      getusers(){
        this.userService.getUsers().subscribe((res: any) => {
          
            this.users = res;
        });
    }
  
      confirmDeleteSelected() {
          this.deleteUsersDialog = false;
          this.users = this.users.filter(val => !this.selectedUsers.includes(val));
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Users Deleted', life: 3000 });
          this.selectedUsers = [];
      }
  
      confirmDelete() {
          this.deleteUserDialog = false;
          this.users = this.users.filter(val => val.id !== this.user.id);
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Deleted', life: 3000 });
          this.user = new User();
      }
  
      hideDialog() {
          this.userDialog = false;
          this.submitted = false;
      }
  
      saveUser() {
          this.submitted = true;
  
          if (this.user.nom?.trim()) {
              if (this.user.id) {
                  // @ts-ignore
                  this.user.inventoryStatus = this.user.inventoryStatus.value ? this.user.inventoryStatus.value : this.user.inventoryStatus;
                  this.users[this.findIndexById(this.user.id)] = this.user;
                  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Updated', life: 3000 });
              } else {
                  this.user.id = this.createId();
                  this.user.code = this.createId();
                  this.user.nom = 'user-placeholder.svg';
                  // @ts-ignore
                  this.user.inventoryStatus = this.user.inventoryStatus ? this.user.inventoryStatus.value : 'INSTOCK';
                  this.users.push(this.user);
                  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Created', life: 3000 });
              }
  
              this.users = [...this.users];
              this.userDialog = false;
              this.user = new User();
          }
      }
  
      findIndexById(id: String): number {
          let index = -1;
          for (let i = 0; i < this.users.length; i++) {
              if (this.users[i].id === id) {
                  index = i;
                  break;
              }
          }
  
          return index;
      }
  
      createId(): string {
          let id = '';
          const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          for (let i = 0; i < 5; i++) {
              id += chars.charAt(Math.floor(Math.random() * chars.length));
          }
          return id;
      }
  
      onGlobalFilter(table: Table, event: Event) {
          table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
      }
}


