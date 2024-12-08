// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-payment',
//   standalone: true,
//   imports: [],
//   templateUrl: './payment.component.html',
//   styleUrl: './payment.component.scss'
// })
// export class PaymentComponent {
//   bookingDetails: any;

//   constructor(private http: HttpClient, private router: Router) {}

//   processPayment() {
//     this.http.post('http://localhost:9091/api/payment/process', this.bookingDetails).subscribe(
//       (response) => {
//         alert('Payment successful, booking confirmed.');
//         this.router.navigate(['/home']);
//       },
//       (error) => {
//         console.error('Payment failed:', error);
//         alert('Payment failed. Please try again.');
//       }
//     );
//   }
// }
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  bookingDetails: any;

  constructor(private router: Router) {}

  proceedToPayment() {
    alert('Payment Successful!');
    this.router.navigate(['/home']);
}
}