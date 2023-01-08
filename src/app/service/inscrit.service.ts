import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InscritService {
  rootUrl = '/api/inscrit/accepted';
  rootUrl1 = '/formation-server/formations';
  public token = localStorage.getItem("_token")
  public headers = new HttpHeaders({
    'Access-Control-Allow-Origin':"*",
    'Content-Type':'application/json',
    "Authorization": `Bearer ${this.token}`
  })
  constructor(private http: HttpClient) { }

  getInscrit(){
      
    return this.http.get(this.rootUrl);         
}
getAllFormation(){
  return this.http.get(this.rootUrl1, {headers: this.headers});         
}
}
