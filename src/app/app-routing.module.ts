import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'my-blog'
  },
  {
    path: 'my-blog',
    loadChildren: () => import('./my-blog/my-blog.module').then(m => m.MyBlogModule)
  },
  {
    path: 'my-management',
    loadChildren: () => import('./my-management/my-management.module').then(m => m.MyManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
