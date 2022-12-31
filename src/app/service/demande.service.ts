import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  b_url = environment.server
   rootUrl = '/INSCRIT-SERVICE/inscrit';
  rootUrl1 = '/FORMATION-SERVER/formations';
  rootUrl2 = '/INSCRIT-SERVICE/inscrit/';
   constructor(private http: HttpClient) { }

   getAllDemande(){
      
       return this.http.get(this.rootUrl);         
   }

   getAllFormation(){
           return this.http.get(this.rootUrl1);         
   }

   acceptInscription(id: any){
    return this.http.put(`${this.b_url}/inscrit/accept`, {id: id})
   }
   refuseInscription(id: any){
    return this.http.put(`${this.b_url}/inscrit/refuse`, {id: id})
   }

}
