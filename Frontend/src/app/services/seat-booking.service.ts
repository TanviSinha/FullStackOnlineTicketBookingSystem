// // import { Injectable } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { Observable } from 'rxjs';

// // @Injectable({
// //   providedIn: 'root',
// // })
// // export class SeatBookingService {
// //   private baseUrl = 'http://localhost:9091/api';

// //   constructor(private http: HttpClient) {}

// //   // Book a seat
// //   bookSeat(bookingPayload: any): Observable<any> {
// //     return this.http.post(`${this.baseUrl}/bookings/book`, bookingPayload);
// //   }

// //   // Get user bookings
// //   getUserBookings(email: string): Observable<any> {
// //     return this.http.get(`${this.baseUrl}/userBookings/${email}`);
// //   }
// // }
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class SeatBookingService {
//   private apiUrl = 'http://localhost:9091/api/bookings'; // Your backend API URL

//   constructor(private http: HttpClient) {}

//   // Get available seats for a specific cinema hall and time slot
//   getAvailableSeats(movieId: string, cinemaHallId: string, timeSlot: string): Observable<string[]> {
//     return this.http.get<string[]>(
//       `${this.apiUrl}/booked-seats?cinemaHallId=${cinemaHallId}&movieId=${movieId}&timeSlot=${encodeURIComponent(timeSlot)}`
//     );
//   }
  

//   // Create a booking with the selected seats
//   bookSeats(bookingData: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/book`, bookingData);
//   }
// }
