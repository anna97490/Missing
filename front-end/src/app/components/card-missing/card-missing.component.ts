import { Component } from '@angular/core';
import { Post } from '../../models/Post.model';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-card-missing',
  templateUrl: './card-missing.component.html',
  styleUrls: ['./card-missing.component.scss']
})
export class CardMissingComponent {
  posts: Post[] = [];
  postService: any = PostService;

  ngOnInit() {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  // this.postService.getPostById(id).subscribe((post: Post) => {
  //   // Utiliser le post récupéré
  // });
}
