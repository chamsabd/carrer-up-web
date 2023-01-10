import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  b_url = environment.server
   rootUrl = '/inscrit';
  rootUrl1 = '/formation-server/formations';
  rootUrl2 = '/inscrit-service/inscrit/';
  public token = localStorage.getItem("_token")
  public headers = new HttpHeaders({
    'Access-Control-Allow-Origin':"*",
    'Content-Type':'application/json',
    "Authorization": `Bearer ${this.token}`
  })
   constructor(private http: HttpClient) { }

   getAllDemande(){
       return this.http.get("/api"+this.rootUrl, {headers: this.headers});         
   }

   getAllFormation(){
      return this.http.get(this.rootUrl1, {headers: this.headers});         
   }

   acceptInscription(id: any){
    return this.http.put(`${this.b_url}/inscrit/accept`, {id: id}, {headers: this.headers})
   }
   refuseInscription(id: any){
    return this.http.put(`${this.b_url}/inscrit/refuse`, {id: id}, {headers: this.headers})
   }

   
   sendDemand(idSession: any) {
    return this.http.post(`${this.b_url}/inscrit`, {idSession: idSession,idUser:UserService.id})
   }

}
