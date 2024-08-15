import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { ServiceClientService } from '../service-client.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: any;
  serviceId: string = '';
  errMessage: string = '';

  // Inject Router vào constructor
  constructor(private _service: ServiceClientService, private _router: Router) {
    _service.getServices().subscribe({
      next: (data) => {
        this.services = data;
      },
      error: (err) => {
        this.errMessage = err;
      }
    });
  }

  detailService(serviceId: string) {
    // Sử dụng Router để chuyển hướng đến route 'service/detail' với serviceId làm tham số
    this._router.navigate(['service/detail', serviceId]);
  }
}
