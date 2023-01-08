import { Component, ElementRef, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Demande } from 'src/app/api/demande.model';
import { Formation } from 'src/app/api/formation.model';
import { AddformationService } from 'src/app/service/addformation.service';
import { DemandeService } from 'src/app/service/demande.service';
import { FormationsService } from 'src/app/service/formation.service';
interface expandedRows {
  [key: string]: boolean;
}
@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent {
  inscrits: {[key: string]: any} = {}
  demandes: Demande[]=[];
  formations:Formation[]=[];
  rowGroupMetadata: any;
  expandedRows: expandedRows = {};
  isExpanded: boolean = false;
  @ViewChild('filter') filter!: ElementRef;
  constructor(
    private formationServices:FormationsService,
    private demservice: DemandeService
  ) { }
 
  ngOnInit(): void {
    this.formationServices.getData().subscribe((response:any) => {
      this.formations = response["content"];
      console.log(this.formations);
      this.demservice.getAllDemande().subscribe((response: any)=>{
        this.demandes = response;
        console.log(this.demandes);
        this.formations.forEach(element => {
          element.sessions.forEach(session => {
            let ind = this.demandes.findIndex((elem:any) => { return elem.idSession == session.id; })
            if(ind != -1){
              //this.inscrits.push({ key: session.id, value: true })
              this.inscrits[''+session.id] = true
              
            }
          });
        });
        console.log(this.inscrits)
      })
    });
  }
//onFilter(dv: DataView, event: Event) {
 // dv.filter((event.target as HTMLInputElement).value);
//}
onGlobalFilter(table: Table, event: Event) {
  table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
}

clear(table: Table) {
  table.clear();
  this.filter.nativeElement.value = '';
}
  expandAll() {
    if (!this.isExpanded) {
        this.formations.forEach(f => f && f.id ? this.expandedRows[f.id] = true : '');

    } else {
        this.expandedRows = {};
    }
    this.isExpanded = !this.isExpanded;
  }
  sendDemande(idSession: any){
    this.demservice.sendDemand(idSession).subscribe(
      (res)=>{
        this.inscrits[''+idSession] = true
        console.log(res)
      }, (err)=>{
        console.log(err)
      }
    )
  }
}
