import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { SeatBookingService } from '../../services/seat-booking.service';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../../services/movie.service';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-seat-booking',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './seat-booking.component.html',
  styleUrl: './seat-booking.component.scss'
})
// export class SeatBookingComponent implements OnInit {
//   cinemaId: number | null = null;
//   slot: string | null = null;

//   constructor(private route: ActivatedRoute) {}

//   ngOnInit(): void {
//     this.cinemaId = Number(this.route.snapshot.paramMap.get('cinemaId'));
//     this.slot = this.route.snapshot.paramMap.get('slot');
//   }
// }
// 
// export class SeatBookingComponent implements OnInit {
//   seats = Array.from({ length: 64 }, (_, i) => ({
//     label: `S${i + 1}`,
//     booked: false,
//     selected: false,
//     price: 200, // Per seat price
//   }));
//   selectedSeats: any[] = [];
//   totalPrice: number = 0;
//   cinemaHallId: string = '';
//   timeSlot: string = '';
//   userId: string = '';

//   constructor(private seatBookingService: SeatBookingService) {}

//   ngOnInit(): void {
//     // Fetch cinema hall and user details, and booked seats
//     this.fetchCinemaHallAndUserDetails();
//     this.fetchBookedSeats();
//   }

//   // Fetch cinema hall ID, user ID, and time slot from backend
//   fetchCinemaHallAndUserDetails(): void {
//     this.seatBookingService.getCinemaHallAndUserDetails().subscribe(
//       (response) => {
//         this.cinemaHallId = response.cinemaHallId;  // e.g., 'CH123'
//         this.userId = response.userId;  // e.g., '12345'
//         this.timeSlot = response.timeSlot;  // e.g., '10:00 AM'
//       },
//       (error) => {
//         console.error('Error fetching cinema hall and user details:', error);
//       }
//     );
//   }

//   // Fetch booked seats for the given cinemaHallId and timeSlot
//   fetchBookedSeats(): void {
//     // We assume the backend provides the booked seat information
//     this.seatBookingService.getBookedSeats(this.cinemaHallId, this.timeSlot).subscribe(
//       (response) => {
//         this.updateBookedSeats(response.bookedSeats);
//       },
//       (error) => {
//         console.error('Error fetching booked seats:', error);
//       }
//     );
//   }

//   // Update seat booking status based on the response from the backend
//   updateBookedSeats(bookedSeats: string[]): void {
//     this.seats.forEach((seat) => {
//       if (bookedSeats.includes(seat.label)) {
//         seat.booked = true;
//       }
//     });
//   }

//   // Toggle seat selection
//   toggleSeat(seat: any): void {
//     if (seat.booked) return; // Don't allow selection of booked seats
//     seat.selected = !seat.selected;

//     if (seat.selected) {
//       this.selectedSeats.push(seat);
//       this.totalPrice += seat.price;
//     } else {
//       this.selectedSeats = this.selectedSeats.filter((s) => s.label !== seat.label);
//       this.totalPrice -= seat.price;
//     }
//   }

//   // Proceed to booking
//   proceedToBooking(): void {
//     const bookingData = {
//       userId: this.userId,
//       cinemaHallId: this.cinemaHallId,
//       timeSlot: this.timeSlot,
//       bookedSeats: this.selectedSeats.map((seat) => seat.label),
//       totalPrice: this.totalPrice,
//     };

//     this.seatBookingService.postBooking(bookingData).subscribe(
//       (response) => {
//         alert('Booking Successful!');
//         console.log('Booking Response:', response);
//       },
//       (error) => {
//         console.error('Error posting booking:', error);
//       }
//     );
//   }
// }
// export class SeatBookingComponent implements OnInit {
//   cinemaHallId: string = '';
//   timeSlot: string = '';
//   cinemaDetails: any = null; // Details of the cinema hall
//   bookedSeats: string[] = []; // Seats already booked
//   selectedSeats: string[] = []; // Seats selected by the user
//   seatLayout: string[] = []; // All available seats
//   totalPrice: number = 0; // Total price calculation
//   ticketPrice: number = 0; // Price per seat

//   constructor(
//     private route: ActivatedRoute,
//     private http: HttpClient,
//     private router: Router,
//     private movieService: MovieService
//   ) {}

//   ngOnInit(): void {
//     // Extract query params
//     this.route.queryParams.subscribe((params) => {
//       this.cinemaHallId = params['cinemaHallId'];
//       this.timeSlot = params['timeSlot'];
//       this.fetchCinemaDetails();
//     });
//   }

//   // Fetch cinema hall details, including booked seats and ticket price
//   fetchCinemaDetails(): void {
//     this.movieService.getCinemaHallDetails(this.cinemaHallId).subscribe(
//       (data: any) => {
//         this.cinemaDetails = data;
//         this.bookedSeats = data.bookedSeats || [];
//         this.seatLayout = data.seatLayout || this.generateDefaultSeatLayout();
//         this.ticketPrice = data.ticketPrice || 0;
//       },
//       (error) => {
//         console.error('Error fetching cinema hall details:', error);
//       }
//     );
//   }

//   // Generate a default seat layout (if none provided by the backend)
//   generateDefaultSeatLayout(): string[] {
//     const seats = [];
//     for (let i = 1; i <= 40; i++) {
//       seats.push(`S${i}`);
//     }
//     return seats;
//   }

//   // Toggle seat selection
//   toggleSeatSelection(seat: string): void {
//     if (this.bookedSeats.includes(seat)) return; // Ignore already booked seats

//     const index = this.selectedSeats.indexOf(seat);
//     if (index > -1) {
//       this.selectedSeats.splice(index, 1);
//     } else {
//       this.selectedSeats.push(seat);
//     }
//     this.calculateTotalPrice();
//   }

//   // Calculate total price
//   calculateTotalPrice(): void {
//     this.totalPrice = this.selectedSeats.length * this.ticketPrice;
//   }

//   // Book the selected seats
//   bookSeats(): void {
//     const bookingData = {
//       email: 'ramasiya@gmail.com', // Replace with actual user email from session
//       movieId: this.cinemaDetails.movieId,
//       cinemaHallId: this.cinemaHallId,
//       timeSlot: this.timeSlot,
//       seats: this.selectedSeats,
//     };

//     this.http.post('http://localhost:9091/api/bookings/book', bookingData).subscribe(
//       (response) => {
//         alert('Booking successful!');
//         this.router.navigate(['/home']);
//       },
//       (error) => {
//         console.error('Error during booking:', error);
//         alert('Booking failed. Please try again.');
//       }
//     );
//   }
// }
 ////correct
//  export class SeatBookingComponent implements OnInit {
//   cinemaHallId: string = '';
//   timeSlot: string = '';
//   cinemaDetails: any = null; // Details of the cinema hall
//   bookedSeats: string[] = []; // Seats already booked
//   selectedSeats: string[] = []; // Seats selected by the user
//   seatLayout: string[] = []; // All available seats
//   totalPrice: number = 0; // Total price calculation
//   ticketPrice: number = 0; // Price per seat

//   constructor(
//     private route: ActivatedRoute,
//     private http: HttpClient,
//     private router: Router,
//     private movieService: MovieService
//   ) {}

//   ngOnInit(): void {
//     // Extract query params
//     this.route.queryParams.subscribe((params) => {
//       this.cinemaHallId = params['cinemaHallId'];
//       this.timeSlot = params['timeSlot'];
//       this.fetchCinemaDetails();
//     });
//   }

//   // Fetch cinema hall details, including booked seats and ticket price
//   fetchCinemaDetails(): void {
//     this.movieService.getCinemaHallDetails(this.cinemaHallId).subscribe(
//       (data: any) => {
//         this.cinemaDetails = data;
//         this.bookedSeats = data.bookedSeats || [];
//         this.seatLayout = data.seatLayout || this.generateDefaultSeatLayout();
//         this.ticketPrice = data.ticketPrice || 200;
//       },
//       (error) => {
//         console.error('Error fetching cinema hall details:', error);
//       }
//     );
//   }

//   // Generate a default seat layout (if none provided by the backend)
//   generateDefaultSeatLayout(): string[] {
//     const seats = [];
//     for (let i = 1; i <= 40; i++) {
//       seats.push(`A${i}`);
//     }
//     return seats;
//   }

//   // Toggle seat selection
//   toggleSeatSelection(seat: string): void {
//     if (this.bookedSeats.includes(seat)) return; // Ignore already booked seats

//     const index = this.selectedSeats.indexOf(seat);
//     if (index > -1) {
//       this.selectedSeats.splice(index, 1);
//     } else {
//       this.selectedSeats.push(seat);
//     }
//     this.calculateTotalPrice();
//   }

//   // Calculate total price
//   calculateTotalPrice(): void {
//     this.totalPrice = this.selectedSeats.length * this.ticketPrice;
//   }

//   // Book the selected seats
//   bookSeats(): void {
//     const bookingData = {
//       email: 'testuser@example.com', // Replace with actual user email from session
//       movieId: this.cinemaDetails.movieId,
//       cinemaHallId: this.cinemaHallId,
//       timeSlot: this.timeSlot,
//       seats: this.selectedSeats,
//     };
//     this.http.post('http://localhost:9091/api/bookings/book', bookingData).subscribe(
//       (response) => {
//         alert('Booking successful!');
//         this.router.navigate(['/payment'], { state: { bookingDetails: bookingData } });
//       },
//       (error) => {
//         console.error('Error during booking:', error);
//         alert('Booking failed. Please try again.');
//       }
//     );
//   }
// }

// // export class SeatBookingComponent implements OnInit {
// //   cinemaHallId: string = '';
// //   timeSlot: string = '';
// //   movieId: string = '';
// //   cinemaDetails: any = null; // Details of the cinema hall
// //   bookedSeats: string[] = []; // Seats already booked
// //   selectedSeats: string[] = []; // Seats selected by the user
// //   seatLayout: string[] = []; // All available seats
// //   totalPrice: number = 0; // Total price calculation
// //   ticketPrice: number = 200; // Default ticket price

// //   constructor(
// //     private route: ActivatedRoute,
// //     private http: HttpClient,
// //     private router: Router,
// //     private movieService: MovieService
// //   ) {}

// //   ngOnInit(): void {
// //     // Extract query params
// //     this.route.queryParams.subscribe((params) => {
// //       this.cinemaHallId = params['cinemaHallId'] || '';
// //       this.timeSlot = params['timeSlot'] || '';
// //       this.movieId = params['movieId'] || '';
// //       if (this.cinemaHallId && this.timeSlot && this.movieId) {
// //         this.fetchCinemaDetails();
// //       } else {
// //         console.error('Missing query parameters!');
// //       }
// //     });
// //   }

// //   // Fetch cinema hall details, including booked seats and ticket price
//   // fetchCinemaDetails(): void {
//   //   this.movieService.getCinemaHallDetails(this.cinemaHallId).subscribe(
//   //     (data: any) => {
//   //       this.cinemaDetails = data;
//   //       this.bookedSeats = data.bookedSeats || [];
//   //       this.seatLayout = data.seatLayout || this.generateDefaultSeatLayout();
//   //       this.ticketPrice = data.ticketPrice || 200;
//   //     },
//   //     (error) => {
//   //       console.error('Error fetching cinema hall details:', error);
//   //     }
// //     );
// //   }

// //   // Generate a default seat layout (if none provided by the backend)
// //   generateDefaultSeatLayout(): string[] {
// //     const seats = [];
// //     for (let i = 1; i <= 40; i++) {
// //       seats.push(`A${i}`);
// //     }
// //     return seats;
// //   }

// //   // Toggle seat selection
// //   toggleSeatSelection(seat: string): void {
// //     if (this.bookedSeats.includes(seat)) return; // Ignore already booked seats

// //     const index = this.selectedSeats.indexOf(seat);
// //     if (index > -1) {
// //       this.selectedSeats.splice(index, 1);
// //     } else {
// //       this.selectedSeats.push(seat);
// //     }
// //     this.calculateTotalPrice();
// //   }

// //   // Calculate total price
// //   calculateTotalPrice(): void {
// //     this.totalPrice = this.selectedSeats.length * this.ticketPrice;
// //   }

// //   // Book the selected seats
// //   bookSeats(): void {
// //     if (this.selectedSeats.length === 0) {
// //       alert('Please select at least one seat to book.');
// //       return;
// //     }

// //     const bookingData = {
// //       email: 'testuser@example.com', // Replace with actual user email from session or state
// //       movieId: this.movieId,
// //       cinemaHallId: this.cinemaHallId,
// //       timeSlot: this.timeSlot,
// //       seats: this.selectedSeats,
// //     };

// //     this.http.post('http://localhost:9091/api/bookings/book', bookingData).subscribe(
// //       (response) => {
// //         alert('Booking successful!');
// //         this.router.navigate(['/user/history'], {
// //           queryParams: { movieId: this.movieId, cinemaHallId: this.cinemaHallId },
// //         });
// //       },
// //       (error) => {
// //         console.error('Error during booking:', error);
// //         alert('Booking failed. Please try again.');
// //       }
// //     );
// //   }
// // }

export class SeatBookingComponent implements OnInit {
  movieId!: string;
  cinemaHallId!: string;
  timeSlot!: string;
  seatLayout: string[] = [];
  bookedSeats: string[] = [];
  selectedSeats: string[] = [];
  ticketPrice: number = 200;
  totalPrice: number = 0;

  private apiUrl = 'http://localhost:9091'; // Hard-coded API URL (you can replace this)

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('movieId')!;
    this.cinemaHallId = this.route.snapshot.paramMap.get('cinemaHallId')!;
    this.timeSlot = this.route.snapshot.paramMap.get('timeSlot')!;
    
    // Fetch booked seats
    this.fetchBookedSeats();
    this.initializeSeatLayout();
  }

  fetchBookedSeats(): void {
    this.http.get<string[]>(`${this.apiUrl}/api/bookings/booked-seats`, {
      params: {
        cinemaHallId: this.cinemaHallId,
        movieId: this.movieId,
        timeSlot: this.timeSlot,
      },
    }).subscribe(
      (data) => {
        this.bookedSeats = data;
      },
      (error) => {
        console.error('Error fetching booked seats:', error);
      }
    );
  }

  initializeSeatLayout(): void {
    this.seatLayout = [
      'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8',
      'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8',
      'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8',
      'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8',
      'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8',
      'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8',
      'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8',
      'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8',
    ];
  }

  toggleSeatSelection(seat: string): void {
    if (this.bookedSeats.includes(seat)) {
      return; // Seat is already booked
    }
    
    const index = this.selectedSeats.indexOf(seat);
    if (index === -1) {
      this.selectedSeats.push(seat);
    } else {
      this.selectedSeats.splice(index, 1);
    }

    this.updateTotalPrice();
  }

  updateTotalPrice(): void {
    this.totalPrice = this.selectedSeats.length * this.ticketPrice;
  }

  confirmBooking(): void {
    if (this.selectedSeats.length === 0) {
      alert('Please select at least one seat.');
      return;
    }

    const bookingData = {
      email: 'user@example.com', // Dynamically get user email
      movieId: 12,
      cinemaHallId: 10,
      timeSlot: "10:00AM",
      seats: this.selectedSeats,
    };

    this.http.post(`${this.apiUrl}/api/bookings/book`, bookingData).subscribe(
      (response) => {
        console.error( response);
        alert('Booking confirmed!');
        this.router.navigate(['/payment']);

      },
      (error) => {
        console.error('Booking failed:', error);
        alert('Booking failed. Please try again later.');
      }
    );
  }
}
