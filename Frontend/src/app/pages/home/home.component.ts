import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentSlide = 0;
  totalSlides = 2;
  movies: any[] = [];
  filteredMovies: any[] = [];
  searchQuery: string = '';

  constructor(private router: Router, private movieService: MovieService) {}

  ngOnInit(): void {
    // Fetch movies on component initialization
    this.fetchMovies();
  }

  // Fetch movies from the backend
  fetchMovies(): void {
    this.movieService.getAllMovies().subscribe(
      (data) => {
        this.movies = data;
        this.filteredMovies = data; // Initialize filteredMovies
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }

  // Handle the search query event
  onSearch(query: string): void {
    this.searchQuery = query.trim().toLowerCase();

    // Filter movies based on the search query
    this.filteredMovies = this.searchQuery
      ? this.movies.filter((movie) =>
          movie.name.toLowerCase().includes(this.searchQuery)
        )
      : this.movies;
  }

  // Navigate to cinema details page for a movie
  navigateToCinema(movieId: string): void {
    this.router.navigate(['/cinema', movieId]);
  }

  // Carousel navigation methods
  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
  }

  // Determine if the carousel should be visible
  isCarouselVisible(): boolean {
    return this.searchQuery === ''; // Only show the carousel if no search query is present
  }
}