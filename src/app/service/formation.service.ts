import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Formation } from '../api/formation.model';

@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  constructor( private http: HttpClient,) { }
  public localUrl = '/FORMATION-SERVER/formations';
  public token = localStorage.getItem("_token")
  getData() {
    let token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWZhZGhhb3VhZGkzMTkiLCJyb2xlcyI6IlJPTEVfVVNFUiIsImlzcyI6Ii9zaWduaW4iLCJleHAiOjE2NzMxNzAwODh9.32AnH0QgX1VWINd31Ta5oxSTltHTnAdKsUzKbMJiErM"
      let headers = new HttpHeaders({

        'Access-Control-Allow-Origin':"*",
        
        'Content-Type':'application/json',
        
        "Authorization": token
        
            })
    return this.http.get(this.localUrl+'signin',{headers:headers});
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
  
  
