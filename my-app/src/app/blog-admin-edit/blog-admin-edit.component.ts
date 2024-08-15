import { Component } from '@angular/core';
import { BlogApiService } from '../blog-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog-admin-edit',
  templateUrl: './blog-admin-edit.component.html',
  styleUrls: ['./blog-admin-edit.component.css']
})
export class BlogAdminEditComponent {
  blog: any;
  blogs: any;
  errMessage: string = ''
  constructor(public _service: BlogApiService, private _router: Router) {
    this._service.getBlogs().subscribe({
      next:(data)=>{this.blogs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getBlogs() {
    this._service.getBlogs().subscribe({
      next: (data) => { this.blogs = data },
      error: (err) => { this.errMessage = err }
    })
  }

  createBlog() {
    this._router.navigate(['tips/new'])
  }

  updateBlog(blogId: string) {
    this._router.navigate(['tips/edit', blogId])
  }

  detailBlog(blogId: string) {
    this._router.navigate(['tips/detail', blogId])
  }
  deleteBlog(blogId: string) {

    this._service.deleteBlog(blogId).subscribe({
      next: (data) => {
        this.blogs = data
      },
      error: (err) => { this.errMessage = err },
    })
}
}
