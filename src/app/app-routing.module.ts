import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './auth/login/login.component'
import { BlogPageComponent } from './blog/blog-page/blog-page.component'
import { PostComponent } from './blog/post/post.component'
import { AdminBlogComponent } from './admin-blog/admin-blog.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'blog',
    component: BlogPageComponent,
  },
  {
    path: 'blog/post',
    component: PostComponent,
  },
  {
    path: 'admin/blog',
    component: AdminBlogComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
