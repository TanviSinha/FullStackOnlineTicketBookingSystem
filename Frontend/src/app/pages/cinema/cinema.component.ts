import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-cinema',
  standalone: true,
  imports: [FormsModule,CommonModule,HeaderComponent],
  templateUrl: './cinema.component.html',
  styleUrl: './cinema.component.scss'
})
// export class CinemaComponent implements OnInit {
//   movieId!: string;

//   constructor(private route: ActivatedRoute) {}

//   ngOnInit(): void {
//     this.movieId = this.route.snapshot.paramMap.get('movieId') || '';
//     // Fetch cinema details based on movieId
//   }
// }
// export class CinemaComponent implements OnInit {
//   cinemas: any[] = []; // Define the cinemas property as an array

//   constructor(private router: Router) {}

//   ngOnInit(): void {
//     // Initialize cinemas with mock data (replace this with real data fetching later)
//     this.cinemas = [
//       { name: 'Cinema 1', location: 'Downtown', timeSlots: ['10:00 AM', '1:00 PM', '4:00 PM'] },
//       { name: 'Cinema 2', location: 'Uptown', timeSlots: ['11:00 AM', '2:00 PM', '5:00 PM'] },
//       { name: 'Cinema 3', location: 'Midtown', timeSlots: ['12:00 PM', '3:00 PM', '6:00 PM'] },
//       { name: 'Cinema 1', location: 'Downtown', timeSlots: ['10:00 AM', '1:00 PM', '4:00 PM'] },
//       { name: 'Cinema 2', location: 'Uptown', timeSlots: ['11:00 AM', '2:00 PM', '5:00 PM'] },
//       { name: 'Cinema 3', location: 'Midtown', timeSlots: ['12:00 PM', '3:00 PM', '6:00 PM'] },
//     ];
//   }
//   bookSlot(cinemaId: number, timeSlot: string): void {
//     // Navigate to the seat selection page with the cinema ID and time slot as parameters
//     this.router.navigate(['/seat-booking'], {
//       queryParams: { cinemaId, timeSlot }
//     });
//   }
// }
export class CinemaComponent implements OnInit {

  // cinemas: any[] = [];  // Holds the list of cinemas
  // movieId: string = ''; // Movie ID from the route

  // constructor(private router: Router,private route: ActivatedRoute, private movieService: MovieService) {}

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe(params => {
  //     this.movieId = params.get('id')!;  // Fetch movieId from URL params
  //     this.fetchCinemasForMovie(this.movieId);  // Call backend to fetch cinemas for this movie
  //   });
  // }
  
  // fetchCinemasForMovie(movieId: string): void {
  //   this.movieService.getCinemasForMovie(movieId).subscribe(
  //     (cinemas) => {
  //       this.cinemas = cinemas;  // Populate cinemas list
  //     },
  //     (error) => {
  //       console.error('Error fetching cinemas:', error);
  //     }
  //   );
  // }

  cinemaHalls: any[] = [];
  movieId: string = '';

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.params['movieId'];
    this.fetchCinemaHalls();
  }

  fetchCinemaHalls(): void {
    this.movieService.getCinemaHallsByMovieId(this.movieId).subscribe((data) => {
      this.cinemaHalls = data;
    });
  }

  goToSeatBooking(cinemaHallId: string, timeSlot: string): void {
    this.router.navigate(['/seat-booking'], {
      queryParams: { cinemaHallId, timeSlot },
    });
  }
}
  