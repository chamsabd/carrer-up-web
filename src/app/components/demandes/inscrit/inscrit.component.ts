import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { InscritService } from 'src/app/service/inscrit.service';

@Component({
  selector: 'app-inscrit',
  templateUrl: './inscrit.component.html',
  styleUrls: ['./inscrit.component.scss']
})
export class InscritComponent  implements OnInit {
  inscrits:any=[];
  @ViewChild('filter') filter!: ElementRef;
  constructor(private inscritService: InscritService ) { }
  ngOnInit(): void {
    this.inscritService.getInscrit().subscribe(
      response=>{
        let list=response
        this.inscrits=JSON.parse(JSON.stringify(list));
        console.log(list);
      }
    )
  }



  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
}
clear(table: Table) {
  table.clear();
  this.filter.nativeElement.value = '';
}
}
