import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MaterialDesignModule } from './material-design/material-design.module'
import { LoginComponent } from './auth/login/login.component'
import { BlogPageComponent } from './blog/blog-page/blog-page.component'
import { SingleBlogComponent } from './blog/single-blog/single-blog.component'
import { PostComponent } from './blog/post/post.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { DeleteDialogComponent } from './admin-blog/delete-dialog/delete-dialog.component';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogPageComponent,
    SingleBlogComponent,
    PostComponent,
    AdminBlogComponent,
    DeleteDialogComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
