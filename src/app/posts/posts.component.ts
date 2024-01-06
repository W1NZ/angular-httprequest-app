import { Component } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: any[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts(10).subscribe(posts => {
      this.posts = posts;
    }, error => {
      console.log(error);
    });
  }
}
