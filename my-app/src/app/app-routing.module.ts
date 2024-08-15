import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ServicesComponent } from './services/services.component';
import { TipsComponent } from './tips/tips.component';
import { CheckComponent } from './check/check.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { FirstComponent } from './first/first.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ProductAdminDeleteComponent } from './product-admin-delete/product-admin-delete.component';
import { ProductAdminDetailComponent } from './product-admin-detail/product-admin-detail.component';
import { ProductAdminNewComponent } from './product-admin-new/product-admin-new.component';
import { ProductAdminUpdateComponent } from './product-admin-update/product-admin-update.component';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogAdminEditComponent } from './blog-admin-edit/blog-admin-edit.component';
import { BlogUpdateComponent } from './blog-update/blog-update.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceAdminComponent } from './service-admin/service-admin.component';
import { ServiceAdminDetailComponent } from './service-admin-detail/service-admin-detail.component';
import { ServiceAdminDeleteComponent } from './service-admin-delete/service-admin-delete.component';
import { ServiceAdminUpdateComponent } from './service-admin-update/service-admin-update.component';
import { ServiceAdminNewComponent } from './service-admin-new/service-admin-new.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path: 'forgetpassword', component:ForgetpasswordComponent},
{path:'login',component:FirstComponent},
{path:'product',component:ProductComponent},
{path:'catalog/productdetail/:id',component:ProductdetailComponent},
{path:'catalog',component:CatalogComponent},
{path:'service',component:ServicesComponent},
{path:'service/:id',component:ServiceDetailComponent},
{path:'service-admin',component:ServiceAdminComponent},
{path:'service-admin/new',component:ServiceAdminNewComponent},
{path:'service-admin/detail/:id',component:ServiceAdminDetailComponent},
{path:'service-admin/delete/:id',component:ServiceAdminDeleteComponent},
{path:'service-admin/edit/:id',component:ServiceAdminUpdateComponent},
{path: 'tips', component:TipsComponent},
{path:'check',component:CheckComponent},
{path:'about-us',component:AboutusComponent}, 
{path:'cart',component:CartComponent},
{ path: 'track-order', component: OrderTrackingComponent},
{path:'signup',component:SignupComponent},
{path:'profile',component:ProfileComponent},
{path: 'tips-admin', component: BlogAdminComponent},
{path: 'tips/new', component: BlogAddComponent},
{path: 'tips-update', component: BlogAdminEditComponent},
{path: 'tips/edit/:id', component: BlogUpdateComponent},
{path: 'tips/detail/:id', component: PostDetailComponent},
{path:'product-admin',component: ProductAdminComponent},
{path:'product-admin/new',component: ProductAdminNewComponent},
{path:'product-admin/edit/:id',component: ProductAdminUpdateComponent},
{path:'product-admin/detail/:id',component: ProductAdminDetailComponent},
{path:'product-admin/delete/:id',component: ProductAdminDeleteComponent},

{path:'**',component:NotFoundComponent},

];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
