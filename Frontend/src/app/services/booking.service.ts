// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class BookingService {
//   private baseUrl = 'http://localhost:9091/api';

//   constructor(private http: HttpClient) {}

//   // Book a seat
//   bookSeat(bookingPayload: any): Observable<any> {
//     return this.http.post(`${this.baseUrl}/bookings/book`, bookingPayload);
//   }

//   // Get user bookings
//   getUserBookings(email: string): Observable<any> {
//     return this.http.get(`${this.baseUrl}/userBookings/${email}`);
//   }
// }
