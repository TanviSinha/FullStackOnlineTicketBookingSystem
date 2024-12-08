import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
// import { AuthService } from '../../services/auth.service';
// import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        // Store the JWT token
        localStorage.setItem('token', response.token);

        // Store the logged-in user's email
        this.authService.setLoggedInUserEmail(this.email);
        localStorage.setItem('userEmail', this.email);

        alert('Login successful');
        this.router.navigate(['/home']); // Navigate to the home page
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert('Invalid credentials');
      },
    });
  }

  navigateToRegister() {
    this.router.navigate(['/register']); // Navigate to the register page
  }

  goToAdminLogin() {
    this.router.navigate(['/admin-login']); // Navigate to the admin login page
  }
}