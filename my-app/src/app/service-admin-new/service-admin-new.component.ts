import { Component } from '@angular/core';
import { ServiceAPIService } from '../service-api.service';
import { Service } from '../Services';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-service-admin-new',
  templateUrl: './service-admin-new.component.html',
  styleUrls: ['./service-admin-new.component.css']
})
export class ServiceAdminNewComponent {
  service = new Service()
  errMessage: string = ''

  constructor(private _service: ServiceAPIService, private _router: Router) { }

  public setService(f: Service) {
    this.service = f
  }

  onFileSelected(event: any, service: Service) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      service.img = reader.result!.toString()
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    }
  }

  postService() {
    if (
      this.service.servicetype.toString() === '' ||
      this.service.name.toString() === '' ||
      this.service.price.toString() === '' ||
      this.service.des.toString() === ''
    ) {
      this.invalidService();
    } else {
      this._service.postService(this.service).subscribe({
        next: (data) => { this.service = data, this.success() },
        error: (err) => { this.errMessage = err },
      })
    }
  }

  invalidService() {
    this.errMessage = 'Invalid service. Full information is required'
  }

  // notify user of successful post
  success() {
    window.alert('Service successfully posted')
    this.cancel()
  }

  // route admin to fashions page
  cancel() {
    this._router.navigate(['service-admin'])
  }
  dropdownOptions = ['Spa Service', 'Hotel Service'];
}
