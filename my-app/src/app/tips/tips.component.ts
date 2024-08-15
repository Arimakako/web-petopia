import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ClientBlogService} from '../Client-blog.service';
import {Blog} from '../Blogs'
@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent {
  cate: string = ''
  cates: string[] = [] // distinct styles
  blogs: any
  selectedStyleBlogs: Blog[] = [] 
  blog: any
  errMessage: string = ''
  page: number = 1;
  count: number =0;
  tableSize: number=5;
  tableSizes: any = [5,10];
  constructor(public _service: ClientBlogService, private _router: Router, private _activeRoute: ActivatedRoute) {
    this.page = 1
    this.getBlogs() 
    this._activeRoute.params.subscribe(params => {
      this.cate = params['cate'] 
      if (this.cate != null) {
        this.getBlogsByCate(this.cate) 
      }
    })
    
}
getBlogs() {
  this._service.getBlogs().subscribe({
    next: (data) => {
      this.blogs = data;
      this.getCates(); // Populate the categories array
    },
    error: (err) => {
      this.errMessage = err;
    }
  });
}


// get distinct styles from fashions and store in styles
getCates() {
  this.cates = []
  for (let blog of this.blogs) {
    if (!this.cates.includes(blog.cate)) {
      this.cates.push(blog.cate)
    }
  }
}

getBlogsByCate(s: string) {
  if (!this.cates.includes(s)) {
    return;
  }

  this._service.getBlogsByCate(s).subscribe({
    next: (data: Blog[]) => {
      this.blogs = data;
      this.page = 1;
    },
    error: (err) => {
      this.errMessage = err;
    }
  });
}


// route to fashion detail page
detailBlog(blogId: string) {
  this._router.navigate(['/tips/detail', blogId])
}

onChange(e: any): void{
  if (e)
    this.page = e;
}
}
