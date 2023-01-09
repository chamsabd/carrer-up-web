import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Stage } from '../api/stage.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StageService {
  readonly rootUrl = '/stage-server/';
  constructor(private http: HttpClient) { }

body(stage : Stage){
  const body: Stage = {
    _id:stage._id,
    societe: stage.societe,
    idRh: stage.idRh,
    sujet: stage.sujet,
    domaine: stage.domaine,
    datedebut: stage.datedebut,
    dateFin: stage.dateFin,
    publishingdate: stage.publishingdate,
    available: stage.available,
    description: stage.description
  }
  return body;
}

  
  
  saveStage(stage : Stage){
    const body:Stage=this.body(stage);

   return this.http.post(this.rootUrl + 'stages', body,{  observe: 'response' }); 
   
  }
 updateStage(stage : Stage){
    const body:Stage=this.body(stage);
   


 return   this.http.put(this.rootUrl + 'stages/'+body._id, body,{  observe: 'response' }); 
   
  }
  deletestage(id:any){
    return this.http.delete(this.rootUrl + 'stages/'+id); 
    }

  getStage(id : String){
    
   


 return   this.http.get(this.rootUrl + 'stages/'+id); 
   
  }
  getStages():Observable<Stage[]>{
   
   


 return  this.http.get<Stage[]>(this.rootUrl + 'stages')

   
  }


  downloadFile(file:String){
    var body = {filename:file};
console.log(body);

    return this.http.post(this.rootUrl + '/file/download',body,{
        responseType : 'blob',
        headers:new HttpHeaders().append('Content-Type','application/json')
    });
}

}