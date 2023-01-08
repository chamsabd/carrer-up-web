import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Formation } from 'src/app/api/formation.model';
import { AddformationService } from 'src/app/service/addformation.service';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.scss']
})
export class AddFormationComponent {
  constructor(private addfService:AddformationService) {}
 
  formation:Formation={
   id: 0,
   nom: undefined,
   description: undefined,
   category: undefined,
   prix: undefined,
   sessions: []
 };
 form!: FormGroup;

  ngOnInit() {
    //this.refreshPeople()
    this.form = new FormGroup({
      'nom': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'category': new FormControl(null, [Validators.required,Validators.minLength(4)]),
      'desc': new FormControl(null, [Validators.required,Validators.minLength(5)]),
      'price': new FormControl(null, [Validators.required])
    });
  }
 
  
  /*refreshPeople() {
    this.addfService.getformation
      .subscribe((data: any) => {
        console.log(data)
        this.formation=data;
      })      
 
  }
  */
  get f(){
    return this.form.controls;
    }
 
  OnSubmit() {
   
   this.addfService.addPerson(this.formation)
      .subscribe(data => {
        console.log(data)
        //this.refreshPeople();
      })      
  }
 
  ///[disabled]="serviceForm.invalid"
  
}
