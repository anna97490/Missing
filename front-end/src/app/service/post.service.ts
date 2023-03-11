import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/Post.model';
import { catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts         : Post[] = [];
  private apiUrl: string = 'http://localhost:3000/api/post';
  token         : any = localStorage.getItem('token');

  constructor(private http: HttpClient) {}

  ngOnInit() {
    return this.http.get<Post[]>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError('Error');
      })
    )
  }

  createPost(post: Object) {
    let postToSend = JSON.stringify(post);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' + this.token })
    };
    return this.http.post('http://localhost:3000/api/post/create', postToSend, httpOptions).pipe(
      map(response => {
        console.log(response);
        return response;
      })
    );
  }

  getPosts() {
    return this.http.get<Post[]>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError('Error');
      })
    )
  }

  getPostById(id: string) {
    console.log('id', id)
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Post>(url);
  }

  editPost(id: string, updatedPost: any) {
    const url = `${this.apiUrl}/${id}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' + this.token })
    };
    return this.http.put(url, updatedPost, httpOptions).pipe(
      map(response => {
        console.log(response);
        return response;
      })
    );
  }

  deletePost(id: string) {
    const url = `${this.apiUrl}/${id}`;
    const user = localStorage.getItem('userId');
    this.getPostById(id);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' + this.token })
    };

    return this.http.delete(url, httpOptions).pipe(
      map(response => {
        console.log(response);
        return response;
      })
    );
  }
}
