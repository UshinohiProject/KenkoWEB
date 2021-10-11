import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Observable, throwError,BehaviorSubject } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

private host: string = environment.apiurl; 

  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded', // <-- Avoid CORS Error with GoogleSheets
    }),
    observe: 'response', 
    body: null,
  };

  constructor(private http: HttpClient) { 
    //this.setAuthorization('my-auth-token'); 
  }

  public get(callback: any) {
    this.http.get(this.host,this.httpOptions)
    .subscribe(
      (res) => {
        const response: any = res;
        callback(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
     
  public setAuthorization(token: string = ''): void {
    if (!token) {return;}
    const bearerToken: string = `Bearer ${token}`;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', bearerToken);
  }

}

/*******  EndOfHttpClientServes  *********/

// Quick testing with interface for our API data: 
export interface Data {
  time_stamp: string;
  sugar: number;
  salt: number;
}

