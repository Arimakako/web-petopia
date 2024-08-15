import { Component } from '@angular/core';
import { ServiceAPIService } from '../service-api.service';
import { Service } from '../Services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-admin-detail',
  templateUrl: './service-admin-detail.component.html',
  styleUrls: ['./service-admin-detail.component.css']
})
export class ServiceAdminDetailComponent {
  id: string = ''
  service = new Service() // service data to show
  errMessage: string = ''

  constructor(private _service: ServiceAPIService, private _router: Router, private _activeroute: ActivatedRoute) {
    this._activeroute.params.subscribe(params => {
      this.id = params['id'] //
      if (this.id != null){
        this.searchService(this.id) // get serviceselected
      } else {
        window.alert('Invalid service id to show')
        this._router.navigate(['/services'])
      }
    })
  }

  searchService(serviceId: string) {
    this._service.getService(serviceId).subscribe({
      next: (data) => { this.service = data },
      error: (err) => { this.errMessage = err },
    })
  }
  goBack() {
    this._router.navigate(['service-admin']);
  }
}
