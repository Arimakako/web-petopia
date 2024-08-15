import { Component } from '@angular/core';
import { ServiceAPIService } from '../service-api.service';

@Component({
  selector: 'app-service-admin-delete',
  templateUrl: './service-admin-delete.component.html',
  styleUrls: ['./service-admin-delete.component.css']
})
export class ServiceAdminDeleteComponent {
  services: any
  serviceId: string = ''
  errMessage: string = ''
  private _router: any;

  constructor(private _service: ServiceAPIService) {
    this._service.getServices().subscribe({
      next: (data) => { this.services = data },
      error: (err) => { this.errMessage = err },
    })
  }

  // delete service
  deleteService(serviceId: string) {

      this._service.deleteService(serviceId).subscribe({
        next: (data) => {this.services = data, this.success()},
        error: (err) => { this.errMessage = err },
      })
  }
  success() {
    window.alert('Service successfully deleted')
    this.cancel()
  }
  cancel() {
    this._router.navigate(['service-admin'])
  }
  // get services
  getServices() {
    this._service.getServices().subscribe({
      next: (data) => { this.services = data },
      error: (err) => { this.errMessage = err },
    })
  }
}
