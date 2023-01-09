import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
//import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { Stage } from 'src/app/api/stage.model';
import { StageService } from 'src/app/service/stage.service';

import {saveAs} from "file-saver";

import {ConfirmationService,  MessageService } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { UserService } from 'src/app/service/user.service';
@Component({
    selector: 'app-afficher',
    templateUrl: './afficher.component.html',
    providers: [ConfirmationService, MessageService,DatePipe]


})
  
export class AfficherComponent implements OnInit {
   
    mindate:any= new Date();
  
   
    constructor(private userService: UserService,private stageservice: StageService,private messageService:MessageService, private confirmationService:ConfirmationService) {
      
     }
     role:String="";
    ngOnInit() {
        this.role = this.userService.role;
        console.log(this.role);
        
        console.log(typeof(this.mindate));
        this.getstages();
  
        this.sortOptions = [
            { label: 'available ', value: '!available' },
            { label: 'not avalable', value: 'available' }
        ];
       
      }

      id:String=""
     

     
    items = [
        { label: 'Update', icon: 'pi pi-refresh',  command: () => {
            this.update();}  },
        { label: 'Delete', icon: 'pi pi-times',command: () => {
            this.delete();}  },
     
        { separator: true },
        { label: 'les condidatuer', icon: 'pi pi-users',command: () => {
            this.show();}  }
        
    ];


    displayup: boolean = false;

    display: boolean = false;
    sortOptions: SelectItem[] = [];

    sortOrder: number = 0;

    sortField: string = '';

    stages = [];
    uploadedFiles: any = [];
    stage: Stage = {
        _id: undefined,
        societe: "",
        idRh: "",
        sujet: "",
        domaine: undefined,

        datedebut: undefined,
        dateFin: undefined,
        publishingdate: new Date,
        available: true,
        description: ""
    };

    displaydw=false;


    selectedState: any = null;
    test(id:String){
        this.id=id;
        }
        show(){

            this.stageservice.getStage(this.id).subscribe({
                next: (v:any) => {
                    if (v) {
                        // v.datedebut=new Date(v.datedebut) 
                        // v.dateFin=new Date(v.dateFin) 
                        // console.log(typeof(v.datedebut));
                        
                        // this.stage=v
        this.uploadedFiles=v.cv;
        this.displaydw=true;
                    }
               
         
                },
                error: (e) =>  {
                    
                    
                    this.messageService.add({ severity: 'error', summary: 'erreur', detail: 'some thing went wrong' });
                    
                    }
                
            })

          

        }

        

   delete(){
console.log("delete"+this.id)
this.confirmationService.confirm({
    key: 'confirmdelete'+this.id,
    message: 'Are you sure that you want to proceed?',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
        this.stageservice.deletestage(this.id).subscribe({
    next: (v:any) => {
        
    this.getstages();
    this.messageService.add({ severity: 'info', summary: 'terminer', detail: 'stage effacer avec succes' });
    
    },
    error: (e) =>  {
        
        this.getstages();
        this.messageService.add({ severity: 'error', summary: 'erreur', detail: 'some thing went wrong' });
        
        }
    
})
    },
    reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
    }
});


   }
   update(){
    console.log("update"+this.id)

    this.stageservice.getStage(this.id).subscribe({
        next: (v:any) => {
            if (v) {
                v.datedebut=new Date(v.datedebut) 
                v.dateFin=new Date(v.dateFin) 
                console.log(typeof(v.datedebut));
                
                this.stage=v
console.log(v); 
this.display=!this.display;
            }
       
 
        },
        error: (e) =>  {
            
            
            this.messageService.add({ severity: 'error', summary: 'erreur', detail: 'some thing went wrong' });
            
            }
        
    })

       }
   






    
   

    reset() {
        this.stage = {
            _id: undefined,
            societe: "",
            idRh: "",
            sujet: "",
            domaine: undefined,

            datedebut: undefined,
            dateFin: undefined,
            publishingdate: new Date,
            available: true,
            description: ""
        };

    }
    insertData() {


        if(this.stage._id== undefined ||this.stage._id== "" ){
       this.stage.idRh="0";
    // this.stage.societe="hdg";
            this.stageservice.saveStage(this.stage).subscribe({
                next: (v:any) => {
                    this.reset();
                this.getstages();
                this.messageService.add({ severity: 'info', summary: 'terminer', detail: 'stage ajouter avec succes' });
                this.display=!this.display
                },
                error: (e:any) =>{
                    this.reset()
                this.display=!this.display
                this.messageService.add({ severity: 'error', summary: 'erreur', detail: 'some thing went wrong' });
            
                }
            })}
            else{

                console.log("update");

                this.stage.idRh="0";
     
            this.stageservice.updateStage(this.stage).subscribe({
                next: (v:any) => {
                    this.reset();
                this.getstages();
                this.messageService.add({ severity: 'info', summary: 'terminer', detail: 'stage modiffier avec succes' });
                this.display=!this.display
                },
                error: (e:any) =>{
                    this.reset()
                this.display=!this.display
                this.messageService.add({ severity: 'error', summary: 'erreur', detail: 'some thing went wrong'+e });
            
                }
            })
                
            }
            
            
          
        
        
      


    }
getstages(){
    this.stageservice.getStages().subscribe((res: any) => {
      
        this.stages = res;
    });
}

  

    onSortChange(event: any) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    onFilter(dv: DataView, event: Event) {
        dv.filter((event.target as HTMLInputElement).value);
    }
//uploader:FileUploader = new FileUploader({url:this.uri});

onUpload(event:any) {
    
      
   this.displayup=false;
   this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
   this.uploadedFiles=[]
       
        }
        resetFile(){
            this.uploadedFiles=[]
            this.displayup=false;
        }

        download(file:any){
            
    
            this.stageservice.downloadFile(file.registername).subscribe({
                next: (data:any) => {saveAs(data, file.name)
                    this.displaydw=false;
                    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File download' });
                
                },
                error: (error:any) => console.error(error)
            });
          
        }
}


