import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { DemandeService } from 'src/app/service/demande.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  providers: [ConfirmationService],
  styleUrls: ['./demande.component.scss']
})
export class DemandeComponent implements OnInit {
  demandes:any;
  display: boolean = false;
  @ViewChild('filter') filter!: ElementRef;
  constructor(private demandeService: DemandeService ,private confirmationService: ConfirmationService) { }
  ngOnInit(): void {
    this.demandeService.getAllDemande().subscribe(
      response=>{
        this.demandes = response;
        console.log(this.demandes);
      }
    )
   
   //   console.log(this.demandes); 
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
