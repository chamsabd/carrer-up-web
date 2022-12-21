import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Formation } from '../api/formation.model';

@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  constructor( private http: HttpClient,) { }
  public localUrl = '/FORMATION-SERVER/formations';
  getData() {
    return this.http.get(this.localUrl);
  }
  
}