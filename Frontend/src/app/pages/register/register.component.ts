import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    const user = { username: this.username, email: this.email, password: this.password };

    this.http.post('http://localhost:9091/api/auth/register', user).subscribe(
      (response: any) => {
        alert("User Registered");
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error(error);
        alert('Error during registration!');
      }
    );
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}