import { Component, ElementRef, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Formation } from 'src/app/api/formation.model';
import { AddformationService } from 'src/app/service/addformation.service';
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
  formations:Formation[]=[];
  rowGroupMetadata: any;
  expandedRows: expandedRows = {};
  isExpanded: boolean = false;
  @ViewChild('filter') filter!: ElementRef;
  constructor(private formationServices:FormationsService ) { }
 
  ngOnInit(): void {
    this.formationServices.getData().subscribe((response:any) => {
      this.formations = response["content"];
      console.log(this.formations);
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
}
