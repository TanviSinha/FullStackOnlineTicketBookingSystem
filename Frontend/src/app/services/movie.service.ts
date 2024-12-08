// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class MovieService {
//   private apiUrl = 'http://localhost:9091/api/movies';

//   constructor(private http: HttpClient) {}

//   // Fetch all movies from the backend
//   getMovies(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl);
//   }
//   getCinemasForMovie(movieId: string): Observable<any[]> {
//     return this.http.get<any[]>(`http://localhost:9091/api/cinemas/movie/${movieId}`);  // Ensure the URL is correct
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'http://localhost:9091/api';

  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/movies`);
  }

  getCinemaHallsByMovieId(movieId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cinemaHalls/${movieId}`);
  }
  getCinemaHallDetails(cinemaHallId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/cinemaHalls/${cinemaHallId}`);
  }
  
}
