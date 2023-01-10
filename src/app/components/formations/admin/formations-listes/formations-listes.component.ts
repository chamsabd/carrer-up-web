import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { Formation } from 'src/app/api/formation.model';
import { FormationsService } from 'src/app/service/formation.service';
import { MessageService } from 'primeng/api';
import { AddformationService } from 'src/app/service/addformation.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Session } from 'src/app/api/session.model';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-formations-listes',
  templateUrl: './formations-listes.component.html',
  styleUrls: ['./formations-listes.component.scss'],
  providers:[MessageService],
})
export class FormationsListesComponent {
  submitted: boolean = false;
  productDialog: boolean = false;
  sessionDialog :boolean =false;
  deleteProductDialog: boolean = false;
  deleteSessionDialog: boolean = false;
  sessionf:Session={
    id: 0,
    nom: "",
    dateDebut: undefined,
    dateFin: undefined,
    etat: "",
    nbrPlace: 0,
    idResponsable: 0,
    formation_id: 0
  };
  mindate:any= new Date();
  
  f_id:number = 0;
  deleteProductsDialog: boolean = false;
  selectedProducts: Formation[] = [];
  selectedsessions: Formation[] = [];
  sessions:Session[]=[];
  formations:Formation[]=[];
  
  formation :Formation={
    id: 0,
    nom: undefined,
    description: undefined,
    category: undefined,
    prix: 0,
    sessions: []
  };
  error:any={isError:false,errorMessage:''};
  isValidDate:any;
  form!: FormGroup;
  form1!: FormGroup;

  constructor(private formationServices:FormationsService,private fservice: FormationsService,private messageService: MessageService,private addfService:AddformationService,private sessionsService:SessionService ) { }

  
  ngOnInit(): void {
   this.getformation();
     this.form = new FormGroup({
      'nom': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'category': new FormControl(null, [Validators.required,Validators.minLength(4)]),
      'desc': new FormControl(null, [Validators.required,Validators.minLength(5)]),
      'prix': new FormControl(null, [Validators.required])
    });
    this.form1=new FormGroup({
      'nom': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'dateDebut': new FormControl(undefined, [Validators.required]),
      'dateFin': new FormControl(undefined, [Validators.required]),
      'etat': new FormControl(null, [Validators.required,]),
      'nbrPlace': new FormControl(null, [Validators.required]),
     
    })
}
getformation(){
  this.fservice.getData().subscribe((response:any) => {
    
    this.formations = response["content"];
  
   });
}


    openNew() {
      
      this.submitted = false;
      this.productDialog = true;

    }
      validateDate(sDate: Date,eDate :Date){
        if((sDate != null && eDate !=null) && (eDate) < (sDate)){
          this.error={isError:true,errorMessage:'End date should be grater then start date.'};
          this.isValidDate = false;
        }
      }
   
      onSubmit(){
        this.addfService.addPerson(this.formation)
            .subscribe(data => {
              console.log(data)
              this.getformation();

            })  
                   
      }
      deleteSelectedProducts() {
        this.deleteProductsDialog = true;

      }

      editProduct(formation: Formation) {
        this.formation = { ...formation };
        this.productDialog = true;
        console.log(this.formation);
       
      }
      editSession(session:Session){
        this.sessionsService.editSession(this.sessionf.id,session).subscribe({next:(v:any) => {
          this.getformation();

          
         
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Formation Updated', life: 3000 });
        }})
        
        }
          
      
         
        
      
      deleteProduct(formation: Formation) {
        this.deleteProductDialog = true;
        this.formation = { ...formation };
      }

      confirmDeleteSelected() {
        this.deleteProductsDialog = false;
        this.formations = this.formations.filter(val => !this.selectedProducts.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Formations Deleted', life: 3000 });
        this.selectedProducts = [];
      }

      confirmDelete() {
        this.deleteProductDialog = false;
        this.formations = this.formations.filter(val => val.id !== this.formation.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Formation Deleted', life: 3000 });
        this.fservice.deleteDataFormation(this.formation.id).subscribe(res => {
          this.formations = this.formations.filter(item => item.id !== this.formation.id)});
          console.log('Post deleted successfully!');
         
      };


      confirmDeleteSession() {
        this.deleteSessionDialog = false;
        this.sessions = this.sessions.filter(val => val.id !== this.sessionf.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'session Deleted', life: 3000 });
        this.sessionsService.deleteSession(this.sessionf.id).subscribe(res => {
          this.sessions = this.sessions.filter(item => item.id !== this.sessionf.id)});
          console.log('Post deleted successfully!');
          this.getformation()
      };

      hideDialog() {
        this.productDialog = false;
        this.submitted = false;
      }

      saveProduct() {
       
          if (this.formation.id) {
            this.fservice.editDataFormation(this.formation).subscribe({next:(v:any) => {
              this.getformation();

              // @ts-ignore
              //this.formations[this.findIndexById(this.formation.id)] = this.formation;
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Formation Updated', life: 3000 });
            }})
            }
           else {
            this.formations.push(this.formation);
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
              this.onSubmit();
              this.submitted = true;
              this.form.reset();
              this.getformation();
            }

         this.formations = [...this.formations];
          this.productDialog = false;
          this.formation = {  id: 0,
            nom: undefined,
            description: undefined,
            category: undefined,
            prix: undefined,
            sessions: []};
            this.getformation();
          
      }

      findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.formations.length; i++) {
            if (this.formations[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
      }
      onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
      }


      get f(){
        return this.form.controls;
        }
      get f1(){
        return this.form1.controls;
      }
      openNewSession(id:number){
        //this.submitted=false;
        this.sessionDialog=true;
        this.f_id= id;
      }

      deleteSession(s:Session){
       
          this.deleteSessionDialog = true;
          this.sessionf = { ...s };
         
      
        
      }
      saveSession() {
        this.sessionf.formation_id=this.f_id;
        console.log(this.f_id);
        this.sessionsService.addData(this.sessionf)
        .subscribe(data => {
          console.log(data) ;
        })

          this.sessionDialog=false;
        this.submitted = true;
        this.getformation();
      }
      refreshFormations() {
  
        this.fservice.getData().subscribe((res: any) => {
          
            this.formations = res;
        });
    }
    
}