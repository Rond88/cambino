import { Component } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder-service';
import { Post } from '../../model/postInterface';

@Component({
  selector: 'app-post-list',
  imports: [],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostListComponent {
  posts: Post[] = [];

  constructor(private oJsonPlaceholderService: JsonplaceholderService) {

  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.oJsonPlaceholderService.getAllPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }
 
}
