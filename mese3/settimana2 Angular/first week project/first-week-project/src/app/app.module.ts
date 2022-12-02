import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivePostsComponent } from './active-posts/active-posts.component';
import { InactivePostsComponent } from './inactive-posts/inactive-posts.component';
import { PostCardComponent } from './post-card/post-card.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpperCase } from './upperCase.pipe';
import { HighlightDirective } from './app-highlight.directive';
import { PostService } from './post.service';
import { UsersService } from './users.service';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    PostCardComponent,
    UserListComponent,
    UpperCase,
    HighlightDirective,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PostService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
