import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


interface Movie {
  id: string;
  name: string;
  genre: string;
  ratings: string;
  votes: string;
  image: string;
}
@Component({
  selector: 'app-movie-management',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './movie-management.component.html',
  styleUrl: './movie-management.component.scss'
})
export class MovieManagementComponent implements OnInit {
  movieForm: FormGroup;
  movies: Movie[] = [];
  isEditMode = false;
  selectedMovieId: string | null = null;
  private readonly API_BASE =  'http://localhost:9091/api/movies'; 

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.movieForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      genre: ['', Validators.required],
      ratings: ['', Validators.required],
      votes: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.http.get<Movie[]>(this.API_BASE).subscribe((data) => (this.movies = data));
  }

  addMovie() {
    const movie = this.movieForm.value;
    this.http.post<Movie>(this.API_BASE, movie).subscribe((data) => {
      this.movies.push(data);
      this.movieForm.reset();
    });
  }

  editMovie(movie: Movie) {
    this.isEditMode = true;
    this.selectedMovieId = movie.id;
    this.movieForm.patchValue(movie);
  }

  updateMovie() {
    const updatedMovie = this.movieForm.value;
    this.http
      .put<Movie>(`${this.API_BASE}/${this.selectedMovieId}`, updatedMovie)
      .subscribe(() => {
        const index = this.movies.findIndex((m) => m.id === this.selectedMovieId);
        if (index !== -1) this.movies[index] = { ...this.movies[index], ...updatedMovie };
        this.resetForm();
      });
  }

  deleteMovie(id: string) {
    this.http.delete(`${this.API_BASE}/${id}`).subscribe(() => {
      this.movies = this.movies.filter((movie) => movie.id !== id);
    });
  }

  resetForm() {
    this.isEditMode = false;
    this.selectedMovieId = null;
    this.movieForm.reset();
  }
}