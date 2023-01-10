import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService, SelectItem } from 'primeng/api';
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
     roles: any[] = [];
     societe: String = "";
     user:User=new User ;
     listroles: any[] = [ "ROLE_ADMIN","ROLE_RESPONSABLE","ROLE_RH","ROLE_FORMATUER","ROLE_USER"];
     get itemsAsSelectItems(): SelectItem [] {
        return this.listroles.map((item) => ({ label: item, value: item } as SelectItem));
      }
      //rowsPerPageOptions = [5, 10, 20];
  displayup=false;
      ngOnInit() {
         // this.userService.getUsers().then(data => this.users = data);
       this.getusers();
      }
      isFound(ro:any){
        return this.roles.find(x=> x == ro);
      }
      saverole() {
       
        this.userService.changerole(this.user.email!,this.roles,this.societe).subscribe({
            next: (v:any) => {
                this.getusers();
           
            this.messageService.add({ severity: 'info', summary: 'terminer', detail: 'roles ajouter avec sucees' });
            this.roles=[];
            this.displayup=false;
            this.societe="";
            },
            error: (e) =>  {
                this.getusers();
                
                this.messageService.add({ severity: 'error', summary: 'erreur', detail: 'some thing went wrong' });
                
                }
            
        })
        
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
  this.user  =this.users.filter((item: User) => item.email === email)[0]
  this.user.roles!.forEach(role => {
    this.roles.push(role.name);
    
  });
   //  console.log(user.email);
     
        }
     
}


