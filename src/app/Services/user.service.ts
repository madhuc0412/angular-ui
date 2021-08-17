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
export class UserService {

    private getusersapiurl = environment.APIURL + environment.GetUsersAPI

    private token = JSON.parse(localStorage.getItem('Token') || '')

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ this.token
        })
    };

    constructor(private http: HttpClient,
        private injector: Injector,
    ) { }


    getUsers(request: any): Promise<APIResponse> {
        return this.http.get<APIResponse>(this.getusersapiurl, this.httpOptions).toPromise();
    }




}
