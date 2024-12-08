// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private apiUrl = 'http://localhost:9091';

//   constructor(private http: HttpClient) {}
//   // loginAdmin(credentials: { adminEmail: string; adminPassword: string }): Observable<any> {
//   //   return this.http.post(`${this.apiUrl}/admin/login`, credentials);
//   // }
//   loginAdmin(credentials: any) {
//     return this.http.post('http://localhost:9091/admin/login', credentials, { responseType: 'text' });
//   }
  

//   login(email: string, password: string): Observable<any> {
//     return this.http.post(`${this.apiUrl}/api/auth/login`, { email, password });
//   }

//   register(email: string, password: string, username: string): Observable<any> {
//     return this.http.post(`${this.apiUrl}/api/auth/register`, {
//       email,
//       password,
//       username,
//     });
//   }
  
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:9091';

  constructor(private http: HttpClient) {}

  // Admin login
  loginAdmin(credentials: any): Observable<string> {
    return this.http.post(`${this.apiUrl}/admin/login`, credentials, { responseType: 'text' });
  }

  // Regular user login
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/auth/login`, { email, password });
  }

  // User registration
  register(email: string, password: string, username: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/auth/register`, { email, password, username });
  }
    private loggedInUserEmail: string | null = null;

    setLoggedInUserEmail(email: string): void {
      this.loggedInUserEmail = email;
    }
  
    // Get the logged-in user's email
    getLoggedInUserEmail(): string | null {
      return this.loggedInUserEmail || localStorage.getItem('userEmail');
    }
  }

