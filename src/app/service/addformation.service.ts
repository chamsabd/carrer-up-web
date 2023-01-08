import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../api/formation.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddformationService {

  constructor(private http: HttpClient) { }
  public localUrl = '/FORMATION-SERVER/formations';

  addPerson(f:Formation): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(f);
    console.log(body)
    return this.http.post(this.localUrl, body,{'headers':headers})
  }
}
