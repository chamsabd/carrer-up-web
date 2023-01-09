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
  mindate:any= new Date();
  sessionDialog :boolean =false;
  deleteFormationDialog: boolean = false;
  deleteSessionDialog: boolean = false;
  sessionf:Session={
    id: 0,
    nom: "",
    dateDebut:  new Date(),
    dateFin: new Date(),
    etat: "",
    nbrPlace: 0,
    idResponsable: 0,
    formation_id: 0
  };

  f_id:number = 0;
  deleteFormationsDialog: boolean = false;
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
    this.fservice.getData().subscribe((response:any) => {
      this.formations = response["content"];
      console.log(this.formations);
     });
     this.form = new FormGroup({
      'nom': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'category': new FormControl(null, [Validators.required,Validators.minLength(4)]),
      'desc': new FormControl(null, [Validators.required,Validators.minLength(5)]),
      'prix': new FormControl(null, [Validators.required])
    });
    this.form1=new FormGroup({
      'nom': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'dateDebut': new FormControl(null, [Validators.required]),
      'dateFin': new FormControl(null, [Validators.required]),
      'etat': new FormControl(null, [Validators.required,]),
      'nbrPlace': new FormControl(null, [Validators.required]),
     
    })
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
              this.fservice.getData()

            })  
                   
      }
      deleteSelectedProducts() {
        this.deleteFormationsDialog = true;

      }

      editFormation(formation: Formation) {
        this.formation = { ...formation };
        this.productDialog = true;
        this.fservice.editDataFormation(formation.id, this.formation);
        console.log(this.formation);
        this.fservice.getData()
      }

      deleteFormation(formation: Formation) {
        this.deleteFormationDialog = true;
        this.formation = { ...formation };
      }

      confirmDeleteSelected() {
        this.deleteFormationsDialog = false;
        this.formations = this.formations.filter(val => !this.selectedProducts.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
        this.selectedProducts = [];
      }

      confirmDelete() {
        this.deleteFormationDialog = false;
        this.formations = this.formations.filter(val => val.id !== this.formation.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
        this.fservice.deleteDataFormation(this.formation.id).subscribe(res => {
          this.formations = this.formations.filter(item => item.id !== this.formation.id)});
          console.log('Post deleted successfully!');
         
      };


      confirmDeleteSession() {
        this.deleteSessionDialog = false;
        this.sessions = this.sessions.filter(val => val.id !== this.sessionf.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'session Deleted', life: 3000 });
        this.fservice.deleteDataFormation(this.sessionf.id).subscribe(res => {
          this.sessions = this.sessions.filter(item => item.id !== this.sessionf.id)});
          console.log('Post deleted successfully!');
      };

      hideDialog() {
        this.productDialog = false;
        this.submitted = false;
      }

      saveProduct() {
       
          if (this.formation.id) {
              // @ts-ignore
              this.formations[this.findIndexById(this.formation.id)] = this.formation;
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
          } else {
            this.formations.push(this.formation);
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
              this.onSubmit();
              this.submitted = true;
              this.form.reset();
            }

         this.formations = [...this.formations];
          this.productDialog = false;
          this.formation = {  id: 0,
            nom: undefined,
            description: undefined,
            category: undefined,
            prix: undefined,
            sessions: []};
            this.refreshFormations();
          
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
          this.refreshFormations();        
        })

          
      }
      refreshFormations() {
  
        this.fservice.getData().subscribe((res: any) => {
          
            this.formations = res;
        });
    }
    
}