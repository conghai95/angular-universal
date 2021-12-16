import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostManagementComponent } from './post-management/post-management.component';

const routes: Routes = [
  {
    path: '',
    component: PostManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyManagementRoutingModule { }
