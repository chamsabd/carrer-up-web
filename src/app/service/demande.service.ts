import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DemandeService {

   rootUrl = '/INSCRIT-SERVICE/inscrit';
  
   constructor(private http: HttpClient) { }

   getAllDemande(){
      
       return this.http.get(this.rootUrl);         
   }
}
