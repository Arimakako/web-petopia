import { Component } from '@angular/core';
import {BlogApiService} from '../blog-api.service'
@Component({
  selector: 'app-blog-delete',
  templateUrl: './blog-delete.component.html',
  styleUrls: ['./blog-delete.component.css']
})
export class BlogDeleteComponent {
  blogs: any
  blogId: string = ''
  errMessage: string = ''

  constructor(private _service: BlogApiService) {
    this._service.getBlogs().subscribe({
      next: (data) => { this.blogs = data },
      error: (err) => { this.errMessage = err },
    })
  }

  deleteBlog(blogId: string) {

      this._service.deleteBlog(blogId).subscribe({
        next: (data) => {
          this.blogs = data
        },
        error: (err) => { this.errMessage = err },
      })
  }

  // get products
  getBlogs() {
    this._service.getBlogs().subscribe({
      next: (data) => { this.blogs = data },
      error: (err) => { this.errMessage = err },
    })
  }
}
