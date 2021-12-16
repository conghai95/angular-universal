import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyManagementRoutingModule } from './my-management-routing.module';
import { PostManagementComponent } from './post-management/post-management.component';


@NgModule({
  declarations: [
    PostManagementComponent
  ],
  imports: [
    CommonModule,
    MyManagementRoutingModule
  ]
})
export class MyManagementModule { }
