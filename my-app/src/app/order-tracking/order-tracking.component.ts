import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent implements OnInit {
  order: any;
  loading = false;
  error: string | null = null;
  searchTerm: string = '';

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const orderId = this.route.snapshot.queryParamMap.get('orderId');
    if (orderId) {
      this.searchTerm = orderId;
      this.trackOrder(orderId);
    }
  }

  trackOrder(orderId: string): void {
    if (!orderId.trim()) {
      this.error = "Please enter a valid order ID.";
      return;
    }

    this.loading = true;
    this.orderService.getOrderDetails(orderId).subscribe({
      next: (data) => {
        this.order = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching order:', err);
        this.error = 'Failed to load order details.';
        this.loading = false;
      }
    });
  }

  searchOrder(): void {
    this.trackOrder(this.searchTerm);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
