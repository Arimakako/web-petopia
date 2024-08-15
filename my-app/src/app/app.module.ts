import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ServicesComponent } from './services/services.component';
import { TipsComponent } from './tips/tips.component';
import { CheckComponent } from './check/check.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { FirstComponent } from './first/first.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';

import { NotFoundComponent } from './not-found/not-found.component';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ProductAdminDeleteComponent } from './product-admin-delete/product-admin-delete.component';
import { ProductAdminDetailComponent } from './product-admin-detail/product-admin-detail.component';
import { ProductAdminNewComponent } from './product-admin-new/product-admin-new.component';
import { ProductAdminUpdateComponent } from './product-admin-update/product-admin-update.component';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {NgxPaginationModule} from 'ngx-pagination';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogAdminEditComponent } from './blog-admin-edit/blog-admin-edit.component';
import { BlogUpdateComponent } from './blog-update/blog-update.component';
import { BlogDeleteComponent } from './blog-delete/blog-delete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceAdminComponent } from './service-admin/service-admin.component';
import { ServiceAdminDeleteComponent } from './service-admin-delete/service-admin-delete.component';
import { ServiceAdminDetailComponent } from './service-admin-detail/service-admin-detail.component';
import { ServiceAdminUpdateComponent } from './service-admin-update/service-admin-update.component';
import { ServiceAdminNewComponent } from './service-admin-new/service-admin-new.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ForgetpasswordComponent,
    ProductComponent,
    ProductdetailComponent,
    AboutusComponent,
    HomeComponent,
    CatalogComponent,
    ServicesComponent,
    TipsComponent,
    CheckComponent,
    CartComponent,
    OrderTrackingComponent,
    FirstComponent,
    SignupComponent,
    ProfileComponent,
    NotFoundComponent,
    ProductAdminComponent,
    ProductAdminDeleteComponent,
    ProductAdminDetailComponent,
    ProductAdminNewComponent,
    ProductAdminUpdateComponent,
    PostDetailComponent,
    BlogAdminComponent,
    BlogAddComponent,
    BlogAdminEditComponent,
    BlogUpdateComponent,
    BlogDeleteComponent,
    ServiceAdminComponent,
    ServiceAdminDeleteComponent,
    ServiceAdminDetailComponent,
    ServiceAdminUpdateComponent,
    ServiceAdminNewComponent,
    ServiceDetailComponent,



  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularEditorModule,
    NgxPaginationModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
