import { Component } from '@angular/core';
import { Formation } from 'src/app/api/formation.model';
import { AddformationService } from 'src/app/service/addformation.service';
import { FormationsService } from 'src/app/service/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent {
  formations:Formation[]=[];
  constructor(private formationServices:FormationsService ) { }

  
  ngOnInit(): void {
    this.formationServices.getData().subscribe((response:any) => {
      this.formations = response["content"];
      console.log(this.formations);
     });
  
   
  

}

}
