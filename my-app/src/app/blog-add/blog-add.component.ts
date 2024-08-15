import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../Blogs';
import { BlogApiService } from '../blog-api.service';
@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent {
   blog = new Blog()
  errMessage: string = ''

  constructor(private _service: BlogApiService, private _router: Router) { }

  public setBlog(f: Blog) {
    this.blog = f
  }

  onFileSelected(event: any, blog: Blog) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      blog.img = reader.result!.toString()
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    }
  }

  postBlog() {
    if (this.blog.title == '' || this.blog.content == '' || this.blog.tag1 == '' || this.blog.tag2 == '' || this.blog.tag3 == '' || this.blog.cate == ''|| this.blog.des == ''|| this.blog.date == ''  ) {
      this.invalidBlog()
    } else {
      this._service.postBlog(this.blog).subscribe({
        next: (data) => { this.blog = data, this.success() },
        error: (err) => { this.errMessage = err },
      })
    }
  }

  invalidBlog() {
    this.errMessage = 'Invalid. Full information is required'
  }

  // notify user of successful post
  success() {
    window.alert('Successfully posted')
    this.cancel()
  }

  // route admin to fashions page
  cancel() {
    this._router.navigate(['/blogadmin'])
  }
}
