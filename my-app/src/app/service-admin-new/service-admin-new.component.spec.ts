import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAdminNewComponent } from './service-admin-new.component';

describe('ServiceAdminNewComponent', () => {
  let component: ServiceAdminNewComponent;
  let fixture: ComponentFixture<ServiceAdminNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceAdminNewComponent]
    });
    fixture = TestBed.createComponent(ServiceAdminNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
