import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Formation } from '../api/formation.model';

@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  constructor( private http: HttpClient,) { }
  public localUrl = '/formation-server/formations';
  public token = localStorage.getItem("_token")
  public headers = new HttpHeaders({
    'Access-Control-Allow-Origin':"*",
    'Content-Type':'application/json',
    "Authorization": `Bearer ${this.token}`
  })
  getData() {
    return this.http.get(this.localUrl+'',{headers: this.headers});
  }
  deleteDataFormation(id:number){
    
     return this.http.delete<Formation>(`${this.localUrl}/${id}`);
    

  }
  editDataFormation(id:number,data: any):Observable<any>{
    {
      return this.http.put(`${this.localUrl}/${id}`, data);
    }
  
  }
  findByCategory(cat:string){
    return this.http.get(`${this.localUrl}/${cat}`)}
  }
  
  
