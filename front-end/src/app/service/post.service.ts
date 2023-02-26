import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl: string = 'http://localhost:3000/api/post';
  constructor(private http: HttpClient) {}

  createPost(post: Post) {
    return this.http.post(this.apiUrl, post);
  }

  getPosts() {
    console.log('get')
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPostById(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Post>(url);
  }

  editPost(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, id);
  }

  deletePost(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
