import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../Blogs';
import { ClientBlogService } from '../Client-blog.service';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  blog = new Blog() 
  id: string = '' 
  errMessage: string = ''

  constructor(private _service: ClientBlogService , private _router: Router, private _activeroute: ActivatedRoute) {
    this._activeroute.params.subscribe(params => {
      this.id = params['id'] //
      if (this.id != null){
        this.searchBlog(this.id) // get fashionselected
      } else {
        window.alert('Invalid fashion id to show')
        this._router.navigate(['tips'])
      }
    })
  }
  goBack() {
    this._router.navigate(['tips']);
  }
  searchBlog(blogId: string) {
    this._service.getBlog(blogId).subscribe({
      next: (data) => { this.blog = data },
      error: (err) => { this.errMessage = err },
    })
  }
}
