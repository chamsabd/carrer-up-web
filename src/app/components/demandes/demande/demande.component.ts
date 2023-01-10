import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { DemandeService } from 'src/app/service/demande.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  providers: [ConfirmationService, MessageService],
  styleUrls: ['./demande.component.scss']
})
export class DemandeComponent implements OnInit {
  demandes:any = [];
  formations:any;
  display_diags:any = []
  display: boolean = false;
  @ViewChild('filter') filter!: ElementRef;
  constructor(private demandeService: DemandeService ,private confirmationService: ConfirmationService, private messageService: MessageService) { }
  ngOnInit(): void {
    this.demandeService.getAllDemande().subscribe(
      response=>{
        let list = JSON.parse(JSON.stringify(response))
        for(let i=0; i < list.length; i++) { this.display_diags.push(false); }
        this.demandes = list;
        console.log(list);
      }
    )
   
   //   console.log(this.demandes); 
   this.demandeService.getAllFormation().subscribe(
    (response1:any)=>{
     
      this.formations =response1["content"] ;
      console.log(this.formations);
    }
  )


     }
     acceptInscript(id: any, index: any){
      this.demandeService.acceptInscription(id).subscribe((res)=>{
        //fermer diaglogs
        this.display_diags[index]=false
        // Mettre a jour le tableau
        let indInscrip = this.demandes.findIndex((elem:any)=> { return elem._id==id;})
        this.demandes[indInscrip].etat = "accepted"
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Demand accepted' });
      },(err)=>{
        console.log(err)
        this.messageService.add({ severity: 'error', summary: 'Sorry', detail: 'No More Places' });
      })
     }
     refuseInscript(id: any, index: any){
      this.demandeService.refuseInscription(id).subscribe((res)=>{
        this.display_diags[index]=false

        let indInscrip = this.demandes.findIndex((elem:any)=> { return elem._id==id;})
        this.demandes[indInscrip].etat = "refused"
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Demand rejected' });
      },(err)=>{
        console.log(err)
      })
     }
     confirm1() {
      this.confirmationService.confirm({
          key: 'confirm1',
          message: 'Are you sure you want to accept or refuse this demande ?'
      });
  }
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }
}
