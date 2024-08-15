import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAdminDeleteComponent } from './service-admin-delete.component';

describe('ServiceAdminDeleteComponent', () => {
  let component: ServiceAdminDeleteComponent;
  let fixture: ComponentFixture<ServiceAdminDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceAdminDeleteComponent]
    });
    fixture = TestBed.createComponent(ServiceAdminDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
