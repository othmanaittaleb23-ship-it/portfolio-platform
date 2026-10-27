import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogDataService, BlogPost } from '../../core/services/blog-data.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  private blogService = inject(BlogDataService);
  posts = this.blogService.getPosts();

  newAuthor: { [key: number]: string } = {};
  newCommentContent: { [key: number]: string } = {};

  onLike(postId: number) {
    this.blogService.toggleLike(postId);
  }

  onAddComment(postId: number) {
    const author = this.newAuthor[postId] || 'Visiteur';
    const content = this.newCommentContent[postId];

    if (content && content.trim()) {
      this.blogService.addComment(postId, author, content);
      this.newCommentContent[postId] = '';
    }
  }
}