import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAdminDetailComponent } from './service-admin-detail.component';

describe('ServiceAdminDetailComponent', () => {
  let component: ServiceAdminDetailComponent;
  let fixture: ComponentFixture<ServiceAdminDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceAdminDetailComponent]
    });
    fixture = TestBed.createComponent(ServiceAdminDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
