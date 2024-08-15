import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {

  email: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    if (this.email) {
      // Replace with your back-end API endpoint
      this.http.post('http://localhost:9992/user/forgot-password', { email: this.email })
        .subscribe(
          (response: any) => {
            alert('Password reset link sent to your email.');
            this.router.navigate(['/login']);
          },
          (error) => {
            alert('Error sending email. Please try again.');
          }
        );
    }
  }
}
