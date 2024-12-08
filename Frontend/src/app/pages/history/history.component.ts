import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HistoryService } from '../../services/history.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [HeaderComponent,CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnInit {
  userEmail: string | null = null;
  history: any[] = [];

  constructor(
    private authService: AuthService,
    private historyService: HistoryService
  ) {}

  ngOnInit(): void {
    this.userEmail = this.authService.getLoggedInUserEmail();
    if (this.userEmail) {
      this.fetchUserHistory(this.userEmail);
    } else {
      console.error('User email not found. Please log in.');
    }
  }

  fetchUserHistory(email: string): void {
    this.historyService.getUserHistory(email).subscribe(
      (data) => {
        this.history = data;
      },
      (error) => {
        console.error('Error fetching user history:', error);
      }
    );
  }
}