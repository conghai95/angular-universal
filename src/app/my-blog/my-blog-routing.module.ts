import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelBlogComponent } from './travel-blog/travel-blog.component';

const routes: Routes = [
  {
    path: '',
    component: TravelBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyBlogRoutingModule { }
