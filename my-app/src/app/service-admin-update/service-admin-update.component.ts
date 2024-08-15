import { Component } from '@angular/core';
import { ServiceAPIService } from '../service-api.service';
import { Service } from '../Services';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-service-admin-update',
  templateUrl: './service-admin-update.component.html',
  styleUrls: ['./service-admin-update.component.css']
})
export class ServiceAdminUpdateComponent {
  service = new Service();
  services: any;
  errMessage: string = ''
  constructor(private _service: ServiceAPIService, private router: Router, private activateRoute: ActivatedRoute) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.searchFashion(id);
      }
    });
  }
  public setService(f: Service) {
    this.service = f
  }
  searchFashion(Id: string) {
    this._service.getService(Id).subscribe({
      next: (data) => {
        this.service = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  putService() {
    if(this.service && this.service._id) {
      this._service.putService(this.service._id, this.service).subscribe({
        next: (data) => { 
          this.services = data; 
          alert('Edit service success');
          this.goBack();
        },
        error: (err) => { 
          this.errMessage = err; 
          console.error('Error updating service:', err);
        }
      });
    } else {
      console.error('service ID or data is missing');
    }
  }
  goBack() {
    this.router.navigate(['service-admin']);
  }
  onFileSelected(event: any, product: Service) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      product.img = reader.result!.toString();
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  };
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
   
  };
  dropdownOptions = ['Spa Service', 'Hotel Service'];
}
