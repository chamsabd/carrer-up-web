import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../api/formation.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddformationService {

  constructor(private http: HttpClient) { }
  public localUrl = '/formation-server/formations';
  body(formation : Formation){
    const body: Formation = {
      id: formation.id,
      nom: formation.nom,
      description: formation.description,
      category: formation.category,
      prix: formation.prix,
      sessions: []
    }
    return body;
  }
  addPerson(f:Formation): Observable<any> {
    const headers = {'Access-Control-Allow-Origin':"*",
    'Content-Type':'application/json',}  
    const body=this.body(f);
    console.log(body)
    return this.http.post(this.localUrl, body,{'headers':headers})
  }
}
