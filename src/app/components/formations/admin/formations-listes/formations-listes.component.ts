import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { Formation } from 'src/app/api/formation.model';
import { FormationsService } from 'src/app/service/formation.service';
import { MessageService } from 'primeng/api';
import { AddformationService } from 'src/app/service/addformation.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Session } from 'src/app/api/session.model';

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
  sessionf:Session={
    id: 0,
    nom: "",
    dateDebut:new Date(),
    dateFin: new Date(),
    etat: "",
    
    nbrPlace: 0
  };
  deleteProductsDialog: boolean = false;
  selectedProducts: Formation[] = [];
  formations:Formation[]=[];
  formation :Formation={
    id: 0,
    nom: undefined,
    description: undefined,
    category: undefined,
    prix: undefined,
    sessions: []
  };
  error:any={isError:false,errorMessage:''};
  isValidDate:any;
  form!: FormGroup;
  form1!: FormGroup;

  constructor(private formationServices:FormationsService,private fservice: FormationsService,private messageService: MessageService,private addfService:AddformationService ) { }

  
  ngOnInit(): void {
    this.formationServices.getData().subscribe((response:any) => {
      this.formations = response["content"];
      console.log(this.formations);
     });
     this.form = new FormGroup({
      'nom': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'category': new FormControl(null, [Validators.required,Validators.minLength(4)]),
      'desc': new FormControl(null, [Validators.required,Validators.minLength(5)]),
      'price': new FormControl(null, [Validators.required])
    });
    this.form1=new FormGroup({
      'nom': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'dateDebut': new FormControl(null, [Validators.required]),
      'dateFin': new FormControl(null, [Validators.required]),
      'nbrPlace': new FormControl(null, [Validators.required])
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
openNewSession(){
  this.submitted=false;
  this.sessionDialog=true;
}
onSubmit(){
  this.addfService.addPerson(this.formation)
      .subscribe(data => {
        console.log(data)
        //this.refreshPeople();
      })      
}
deleteSelectedProducts() {
  this.deleteProductsDialog = true;

}

editProduct(formation: Formation) {
  this.formation = { ...formation };
  this.productDialog = true;
  this.fservice.editDataFormation(formation.id, this.formation);
  console.log(this.formation);
  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Formation edit', life: 4000 });


}

deleteProduct(formation: Formation) {
  this.deleteProductDialog = true;
  this.formation = { ...formation };
}

confirmDeleteSelected() {
  this.deleteProductsDialog = false;
  this.formations = this.formations.filter(val => !this.selectedProducts.includes(val));
  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
  this.selectedProducts = [];
}

confirmDelete() {
  this.deleteProductDialog = false;
  this.formations = this.formations.filter(val => val.id !== this.formation.id);
  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
  this.fservice.deleteDataFormation(this.formation.id).subscribe(res => {
    this.formations = this.formations.filter(item => item.id !== this.formation.id)});
    console.log('Post deleted successfully!');
};



hideDialog() {
  this.productDialog = false;
  this.submitted = false;
}

saveProduct() {
  this.onSubmit();
  this.submitted = true;
  this.form.reset();

     
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
 

 
}