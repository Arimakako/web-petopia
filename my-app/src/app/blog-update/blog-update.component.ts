import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../Blogs';
import { BlogApiService } from '../blog-api.service';
import {AngularEditorConfig} from '@kolkov/angular-editor'
@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.css']
})
export class BlogUpdateComponent {
  blog = new Blog();
  blogs: any;
  errMessage: string = ''
  constructor(private _service: BlogApiService, private router: Router, private activateRoute: ActivatedRoute) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.searchBlog(id);
      }
    });
  }
  public setBlog(f: Blog) {
    this.blog = f
  }
  searchBlog(Id: string) {
    this._service.getBlog(Id).subscribe({
      next: (data) => {
        this.blog = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
}
putBlog() {
  if(this.blog && this.blog._id) {
    this._service.putBlog(this.blog._id, this.blog).subscribe({
      next: (data) => { 
        this.blogs = data; 
        alert('Edit blog success');
        this.goBack();
      },
      error: (err) => { 
        this.errMessage = err; 
        console.error('Error updating blog:', err);
      }
    });
  } else {
    console.error('blog ID or data is missing');
  }
}
goBack() {
  this.router.navigate(['tips-update']);
}
onFileSelected(event: any, blog: Blog) {
  let me = this;
  let file = event.target.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    blog.img = reader.result!.toString();
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
};
config: AngularEditorConfig = {
  editable: true,
  spellcheck: true,
  height: '15rem',
  minHeight: '5rem',
  placeholder: 'Enter text here...',
  translate: 'no',
  defaultParagraphSeparator: 'p',
  defaultFontName: 'Arial',
 
};

}

