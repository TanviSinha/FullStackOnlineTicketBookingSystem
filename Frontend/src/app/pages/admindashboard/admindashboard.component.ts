import { Component } from '@angular/core';
import { MovieManagementComponent } from './movie-management/movie-management.component';
import { CinemaManagementComponent } from './cinema-management/cinema-management.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.scss'
})
export class AdmindashboardComponent {
  constructor(private router: Router) {}

  goToMovieManagement(): void {
    this.router.navigate(['/admindashboard/movie-management']);
  }
  
  goToCinemaManagement(): void {
    this.router.navigate(['/admindashboard/cinema-management']);
  }
  logout() {
  this.router.navigate(['/admin-login']);
  } 
}