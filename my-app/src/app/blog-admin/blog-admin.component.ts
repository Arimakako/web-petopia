import { Component } from '@angular/core';
import { BlogApiService } from '../blog-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.css']
})
export class BlogAdminComponent {
  blogs: any;
  errMessage: string = ''
  constructor(public _service: BlogApiService, private _router: Router) {
    this.getBlogs()
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
  editBlog(){
    this._router.navigate(['tips-update'])
  }

  detailBlog(blogId: string) {
    this._router.navigate(['tips/detail/:id', blogId])
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
