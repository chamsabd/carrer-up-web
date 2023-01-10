import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Formation } from 'src/app/api/formation.model';
import { AddformationService } from 'src/app/service/addformation.service';
import { FormationsService } from 'src/app/service/formation.service';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.scss']
})
export class AddFormationComponent {
  constructor(private addfService:AddformationService,private fservice :FormationsService) {}
 
  formation:Formation={
   id: 0,
   nom: undefined,
   description: undefined,
   category: undefined,
   prix: undefined,
   sessions: []
   
 };
 form!: FormGroup;
 formations!: Formation[]; 
  ngOnInit() {
    this.form = new FormGroup({
      'nom': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'category': new FormControl(null, [Validators.required,Validators.minLength(4)]),
      'desc': new FormControl(null, [Validators.required,Validators.minLength(5)]),
      'price': new FormControl(null, [Validators.required])
    });
  }
 
  
  refreshFormations() {
  
      this.fservice.getData().subscribe((res: any) => {
        
          this.formations = res;
      });
  }
    
 
  
  
  get f(){
    return this.form.controls;
    }
 
  OnSubmit() {
   
    this.addfService.addPerson(this.formation)
    .subscribe(data => {
      console.log(data)
      this.refreshFormations();
      this.reset();
    });
   
}
reset() {
  this.formation = {
      
    id: 0,
    nom: "",
    description: "",
    category: "",
    prix: undefined,
    sessions: []
  };
 
  
}
}
