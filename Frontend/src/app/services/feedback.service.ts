import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private apiUrl = 'http://localhost:9091/api/feedbacks'; // Update with your correct endpoint

  constructor(private http: HttpClient) {}

  // Fetch all feedbacks
  getFeedbacks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}
