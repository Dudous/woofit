import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogApiService {

  constructor(private http: HttpClient) { }

  RandomImg(): Observable<any> {
    const url = `https://dog.ceo/api/breeds/image/random`;

    const header = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
    return this.http.get(url, header);
  }
}

