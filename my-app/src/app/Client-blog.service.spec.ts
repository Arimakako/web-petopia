import { TestBed } from '@angular/core/testing';

import { ClientBlogService } from './Client-blog.service';

describe('ClientProductService ', () => {
  let service: ClientBlogService ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientBlogService );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});