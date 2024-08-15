import { Component } from '@angular/core';
import { ServiceAPIService } from '../service-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-admin',
  templateUrl: './service-admin.component.html',
  styleUrls: ['./service-admin.component.css']
})
export class ServiceAdminComponent {
  services: any;
  errMessage: string = ''
  constructor(public _service: ServiceAPIService, private _router: Router) {
    this.getServices()
  }

  getServices() {
    this._service.getServices().subscribe({
      next: (data) => { this.services = data },
      error: (err) => { this.errMessage = err }
    })
  }

  createService() {
    this._router.navigate(['service-admin/new'])
  }

  updateService(serviceId: string) {
    this._router.navigate(['service-admin/edit', serviceId])
  }

  detailService(serviceId: string) {
    this._router.navigate(['service-admin/detail', serviceId])
  }

  deleteService(serviceId: string) {

    this._service.deleteService(serviceId).subscribe({
      next: (data) => { this.services = data, this.success() },
      error: (err) => { this.errMessage = err },
    })
}
success() {
  const userConfirmed = window.confirm('Are you sure you want to delete this service?');
  if (userConfirmed) {
    this.cancel();
  }
}
cancel() {
  this._router.navigate(['service-admin'])
}
}
