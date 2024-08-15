import { Component } from '@angular/core';
import { ServiceClientService } from '../service-client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Service } from '../Services';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent {
  service = new Service() 
  id: string = '' 
  errMessage: string = ''
  private destroy$: Subject<void> = new Subject<void>();
  private addToCartSubject: Subject<Service> = new Subject<Service>();
  constructor(private _service: ServiceClientService, 
    private _router: Router, 
    private _activeroute: ActivatedRoute,
    private cartService: CartService ) {
    this._activeroute.params.subscribe(params => {
      this.id = params['id'] //
      if (this.id != null){
        this.searchService(this.id) // get serviceselected
      } else {
        window.alert('Invalid service id to show')
        this._router.navigate(['service'])
      }
    })
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  } 
  ngOnInit():void{

  // Example of debouncing the addToCart event using RxJS
  this.addToCartSubject.pipe(debounceTime(500), takeUntil(this.destroy$)).subscribe((service) => {
    this.handleAddToCart(service);
  });
}
    
  goBack() {
    this._router.navigate(['service']);
  }
  searchService(serviceId: string) {
    this._service.getService(serviceId).subscribe({
      next: (data) => { this.service = data },
      error: (err) => { this.errMessage = err },
    })
  }
  addToCart(service: Service) {
    if (service.quantity < 0) {
      alert('Invalid quantity');
      return;
    }
  
    alert('Your product has been added to the cart!');
    this.addToCartSubject.next(service);
  }
  
  handleAddToCart(service: Service) {
    this.cartService;
    console.log(service);
  }
}
