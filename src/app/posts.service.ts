import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postsURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts(limit: number): Observable<any> {
    return this.http.get<any>(`${this.postsURL}/posts?_limit=${limit}`);
  }
}
