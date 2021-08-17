import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { APIResponse } from '../APIResponse';
import { environment } from 'src/environments/environment';





@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private loginapiurl = environment.APIURL+ environment.LoginAPI
    private signupapiurl = environment.APIURL+ environment.SignUpAPI

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
    private injector: Injector,
    ) { }

 
   login(request: any): Promise<APIResponse> {
    return this.http.post<APIResponse>(this.loginapiurl, request, this.httpOptions).toPromise();
  }
 
  signup(request: any): Promise<APIResponse> {
    return this.http.post<APIResponse>(this.signupapiurl, request, this.httpOptions).toPromise();
  }


}
