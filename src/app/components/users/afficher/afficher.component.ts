import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/api/user.model';
interface expandedRows {
    [key: string]: boolean;
}
@Component({
    selector: 'app-afficher',
    templateUrl: './afficher.component.html',
    providers: [ConfirmationService, MessageService]


})


  
export class AfficherComponent implements OnInit {
   
   
    constructor(private userService: UserService,private messageService:MessageService, private confirmationService:ConfirmationService) {
      
     }
 

   
      users = [];
    //   selectedCustomers1 = [];
    //   representatives = [];

     // statuses: any[] = [];
  
     // products = [];
     // rowGroupMetadata: any;

      loading: boolean = false;
  
     // activityValues: number[] = [0, 100];
  
     // @ViewChild('filter') filter!: ElementRef;

  
      //rowsPerPageOptions = [5, 10, 20];
  displayup=false;
      ngOnInit() {
         // this.userService.getUsers().then(data => this.users = data);
       this.getusers();
      }
    
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
    getusers(){
        this.userService.getUsers().subscribe((res: any) => {
            console.log(res);
            
            this.users = res.body;
        });
    }

    test(email:String){
     var  user:User =this.users.filter((item: User) => item.email === email)[0]
     console.log(user.email);
     
        }
     
}


