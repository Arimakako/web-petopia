import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDeleteComponent } from './blog-delete.component';

describe('BlogDeleteComponent', () => {
  let component: BlogDeleteComponent;
  let fixture: ComponentFixture<BlogDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogDeleteComponent]
    });
    fixture = TestBed.createComponent(BlogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
