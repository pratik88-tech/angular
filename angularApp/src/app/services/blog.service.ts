import { Injectable } from '@angular/core';
import { BLOGS } from '../mock/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  allBlogs=BLOGS;
  constructor() { }
  getAllBlogs(){
    return this.allBlogs;
  }
}
