import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.scss'
})
export class AdminLoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const credentials = {
      adminEmail: this.email,
      adminPassword: this.password
    };
  
    this.authService.loginAdmin(credentials).subscribe(
      (response) => {
        console.log('Login successful:', response);
        if (response === 'Admin Login Successful') {
          this.router.navigate(['/admindashboard']);
        } else {
          this.errorMessage = 'Unexpected response from server.';
        }
      },
      (error) => {
        console.error('Login failed:', error);
        this.errorMessage = 'Invalid email or password.';
      }
    );
  }
}