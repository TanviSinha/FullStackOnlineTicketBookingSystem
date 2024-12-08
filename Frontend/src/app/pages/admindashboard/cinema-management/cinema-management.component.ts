import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CinemaService } from '../../../services/cinema.service';

@Component({
  selector: 'app-cinema-management',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './cinema-management.component.html',
  styleUrls: ['./cinema-management.component.scss'],
})
export class CinemaManagementComponent implements OnInit {
  movieId: string | null = null; // Holds the movie ID
  cinemaHalls: any[] = []; // Stores cinema halls fetched from the server
  newCinemaHall = {
    name: '',
    location: '',
    movieId: '',
    timeSlots: [] as string[] // Stores time slots for the new cinema hall
  };
  newTimeSlot: string = ''; // Temp input for a new time slot
  errorMessage: string = ''; // Holds error messages

  constructor(private cinemaService: CinemaService) {}

  ngOnInit(): void {
    // Optionally, set a default movie ID
    this.movieId = '1'; // Replace with your default logic
  }

  fetchCinemaHalls(): void {
    if (!this.movieId) {
      this.errorMessage = 'Movie ID is required to fetch cinema halls.';
      return;
    }

    this.cinemaService.getCinemaHallsByMovieId(this.movieId).subscribe({
      next: (data) => {
        this.cinemaHalls = data;
        this.errorMessage = '';
      },
      error: (err) => {
        this.errorMessage = 'Failed to fetch cinema halls. Please try again.';
        console.error(err);
      }
    });
  }

  addCinemaHall(): void {
    if (!this.movieId) {
      this.errorMessage = 'Movie ID is required to add a cinema hall.';
      return;
    }

    if (!this.newCinemaHall.name || !this.newCinemaHall.location || !this.newCinemaHall.timeSlots.length) {
      this.errorMessage = 'Please provide all required details for the cinema hall.';
      return;
    }

    // Set the movie ID in the cinema hall object
    this.newCinemaHall.movieId = this.movieId;

    this.cinemaService.addCinemaHall(this.newCinemaHall).subscribe({
      next: (data) => {
        console.log('Cinema hall added:', data);
        this.fetchCinemaHalls(); // Refresh the cinema halls list
        this.resetForm();
        this.errorMessage = '';
      },
      error: (err) => {
        this.errorMessage = 'Failed to add cinema hall. Please try again.';
        console.error(err);
      }
    });
  }

  addTimeSlot(): void {
    if (this.newTimeSlot.trim() && !this.newCinemaHall.timeSlots.includes(this.newTimeSlot.trim())) {
      this.newCinemaHall.timeSlots.push(this.newTimeSlot.trim());
      this.newTimeSlot = ''; // Clear the input after adding
    }
  }

  removeTimeSlot(slot: string): void {
    this.newCinemaHall.timeSlots = this.newCinemaHall.timeSlots.filter((s) => s !== slot);
  }

  resetForm(): void {
    this.newCinemaHall = {
      name: '',
      location: '',
      movieId: '',
      timeSlots: []
    };
    this.newTimeSlot = '';
  }
}
