import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../../services/feedback.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback-management.component.html',
  styleUrl: './feedback-management.component.scss'
})
export class FeedbackManagementComponent implements OnInit {
  feedbacks: any[] = [];  // Array to hold the feedbacks
  loading: boolean = true;

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.fetchFeedbacks();
  }

  // Fetch feedbacks from the backend
  fetchFeedbacks(): void {
    this.feedbackService.getFeedbacks().subscribe(
      (data) => {
        this.feedbacks = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching feedbacks', error);
        this.loading = false;
      }
    );
  }
}