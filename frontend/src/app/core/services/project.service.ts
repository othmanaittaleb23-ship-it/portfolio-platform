import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  youtubeVideoId?: string; // Ex: 'dQw4w9WgXcQ' ou undefined si pas encore uploadé
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Plateforme Intelligente de Gestion des Réclamations',
      category: 'Stage PFE - DXC Technology',
      description: 'Système complet de gestion des réclamations clients intégrant l’authentification par reconnaissance faciale, le traitement IA et un tableau de bord analytique.',
      technologies: ['Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'Python ML'],
      githubUrl: 'https://github.com/othmanaittaleb23-ship-it',
      youtubeVideoId: '' // Vidéo à venir
    },
    {
      id: 2,
      title: 'Plateforme de Gestion de Projets Web',
      category: 'Stage Full Stack - SNRT',
      description: 'Application web de suivi des projets informatiques, gestion des sprints, attribution des tâches et reporting temps réel.',
      technologies: ['Spring Boot', 'React', 'TailwindCSS', 'MySQL'],
      githubUrl: 'https://github.com/othmanaittaleb23-ship-it',
      youtubeVideoId: '' // Vidéo à venir
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}