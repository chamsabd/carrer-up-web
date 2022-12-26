import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InscritService {
  rootUrl = '/INSCRIT-SERVICE/inscrit/accepted';
  rootUrl1 = '/FORMATION-SERVER/formations';
  constructor(private http: HttpClient) { }

  getInscrit(){
      
    return this.http.get(this.rootUrl);         
}
getAllFormation(){
  return this.http.get(this.rootUrl1);         
}
}
