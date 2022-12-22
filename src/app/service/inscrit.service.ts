import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InscritService {
  rootUrl = '/INSCRIT-SERVICE/inscrit/accepted';

  constructor(private http: HttpClient) { }

  getInscrit(){
      
    return this.http.get(this.rootUrl);         
}
}
