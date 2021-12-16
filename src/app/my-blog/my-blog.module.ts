import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyBlogRoutingModule } from './my-blog-routing.module';
import { TravelBlogComponent } from './travel-blog/travel-blog.component';


@NgModule({
  declarations: [
    TravelBlogComponent
  ],
  imports: [
    CommonModule,
    MyBlogRoutingModule
  ]
})
export class MyBlogModule { }
