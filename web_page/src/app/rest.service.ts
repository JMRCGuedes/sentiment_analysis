import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  sendMovie(body?: any): Observable<any> {
    // const headers = new HttpHeaders()
    //   .set('content-type', 'aplication/json')
    //   .set('Access-Control-Allow-Origin', '*');
    return this.http.post<any[]>(`http://localhost:9000/movie`, body, { observe: 'response' });
  }
}
