import { Injectable } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private postSrv: PostService) {
  }

  getAuthors() {
    const posts = this.postSrv.userPosts;

    return [...new Set(posts.map(p => p.author))];
  }
}

