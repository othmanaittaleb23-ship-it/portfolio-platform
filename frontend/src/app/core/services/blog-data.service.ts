import { Injectable, signal } from '@angular/core';

export interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
}

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  likes: number;
  isLiked?: boolean;
  comments: Comment[];
}

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {
  private posts = signal<BlogPost[]>([
    {
      id: 1,
      title: 'Conception d’une Architecture Microservices Scalable avec Spring Boot & Docker',
      summary: 'Retour d’expérience sur la mise en place d’une architecture distribuée, la gestion de la sécurité JWT et la conteneurisation.',
      content: 'Dans cet article, nous explorons les bonnes pratiques de découpage en microservices, le routage via API Gateway et la centralisation de la sécurité...',
      category: 'Architecture & DevOps',
      date: '12 Octobre 2026',
      readTime: '5 min',
      likes: 14,
      isLiked: false,
      comments: [
        { id: 1, author: 'Imane', content: 'Super article très clair sur les microservices !', date: '14 Octobre 2026' }
      ]
    },
    {
      id: 2,
      title: 'Optimisation des performances Angular : Signals & Standalone Components',
      summary: 'Comment exploiter la réactivité fine d’Angular et réduire la taille des bundles grâce aux composants autonomes.',
      category: 'Frontend',
      date: '02 Octobre 2026',
      readTime: '4 min',
      likes: 22,
      isLiked: false,
      content: 'Les Signals dans Angular apportent une gestion d’état prévisible et ultra-performante sans surcharger le cycle de détection de changements...',
      comments: []
    }
  ]);

  getPosts() {
    return this.posts;
  }

  toggleLike(postId: number) {
    this.posts.update(currentPosts =>
      currentPosts.map(post => {
        if (post.id === postId) {
          const isLiked = !post.isLiked;
          return {
            ...post,
            isLiked,
            likes: isLiked ? post.likes + 1 : post.likes - 1
          };
        }
        return post;
      })
    );
  }

  addComment(postId: number, author: string, content: string) {
    this.posts.update(currentPosts =>
      currentPosts.map(post => {
        if (post.id === postId) {
          const newComment: Comment = {
            id: Date.now(),
            author,
            content,
            date: 'À l’instant'
          };
          return {
            ...post,
            comments: [...post.comments, newComment]
          };
        }
        return post;
      })
    );
  }
}