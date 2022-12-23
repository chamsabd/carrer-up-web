import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Session } from '../api/session.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }
  public BaseUrl = '/FORMATION-SERVER/sessions';
addData(s:Session ):Observable<any> {
{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(s);
    console.log(body)
    return this.http.post(this.BaseUrl, body,{'headers':headers})
  }
}
}
