import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent {
  EMAIL_ADDRESS: string = "support@vipanchibakes.com";
  MOBILE_NUMBER: string = "+917989334797";
  apiUrl: string = 'https://wti2p6mhezkglv6x3mueyfxpdq0gpfqt.lambda-url.ap-south-1.on.aws/enquiries'; // Swap this with your AWS Lambda Function URL for production (e.g. 'https://xxxx.lambda-url.region.on.aws/enquiries')
  isSubmitted = signal(false);
  isSubmitting = signal(false);

  enquiryData = {
    fullName: '',
    email: '',
    mobileNumber: '',
    message: ''
  };

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.isSubmitting.set(true);
    console.log(this.enquiryData);
    this.http.post(this.apiUrl, this.enquiryData).subscribe({
      next: (response) => {
        this.isSubmitting.set(false);
        this.isSubmitted.set(true);
      },
      error: (error) => {
        this.isSubmitting.set(false);
        console.error('There was an error sending the enquiry!', error);
        alert('Failed to send enquiry. Please try again later.');
      }
    });
  }
}
