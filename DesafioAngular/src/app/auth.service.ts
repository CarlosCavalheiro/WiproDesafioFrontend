import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTQyZjM0YWNlMWYxM2VkMjQzYWZhMWM3MTRiNWRiYyIsInN1YiI6IjYyYTY3OWUxMWM2MzI5MDA5ZTU4ZWNhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z43YEjB4Fw2JegBXz4o1dmfNAGj2YPDl1UPv_p6gqb8';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,    
  }),
};

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  private url = 'https://api.themoviedb.org/3/movie/';

  constructor(private http: HttpClient) {}

  getFilmes(baseUrl: string) {
    const url = `${this.url}${baseUrl}`;
    return this.http
      .get(url, httpOptions)
      .toPromise()
      .then((data) => {
        return data;
      });
  }
}
