import { Component } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent {
  posts: any[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts(1).subscribe(posts => {
      this.posts = posts;
    }, error => {
      console.log(error);
    });
  }
}
