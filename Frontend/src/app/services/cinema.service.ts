import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  private baseUrl = 'http://localhost:9091/api/cinemaHalls'; // Adjust according to your backend

  constructor(private http: HttpClient) {}

  getCinemaHallsByMovieId(movieId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${movieId}`);
  }

  addCinemaHall(cinemaHall: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, cinemaHall);
  }
}
