import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAdminEditComponent } from './blog-admin-edit.component';

describe('BlogAdminEditComponent', () => {
  let component: BlogAdminEditComponent;
  let fixture: ComponentFixture<BlogAdminEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogAdminEditComponent]
    });
    fixture = TestBed.createComponent(BlogAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
