import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAdminUpdateComponent } from './service-admin-update.component';

describe('ServiceAdminUpdateComponent', () => {
  let component: ServiceAdminUpdateComponent;
  let fixture: ComponentFixture<ServiceAdminUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceAdminUpdateComponent]
    });
    fixture = TestBed.createComponent(ServiceAdminUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
