import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-feedback',
  standalone: true,
  imports: [HeaderComponent,CommonModule,FormsModule],
  templateUrl: './user-feedback.component.html',
  styleUrl: './user-feedback.component.scss'
})
export class UserFeedbackComponent {
  feedback = {
    customerName: '',
    email: '',
    message: '',
    rating: 5
  };
  feedbackSubmitted: boolean = false;

  constructor(private http: HttpClient  ) {}

  submitFeedback() {
    this.http.post('http://localhost:9091/api/feedbacks/add', this.feedback).subscribe(
      (response) => {
        console.log(response);
        this.feedbackSubmitted = true;
        this.feedback = { customerName: '', email: '', message: '', rating: 5 }; // Clear the form
      },
      (error) => {
        console.error(error);
        alert('Failed to submit feedback. Please try again.');
      }
    );
  }
}