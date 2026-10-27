import { Injectable } from '@angular/core';

export interface SkillCategory {
  title: string;
  tag: string;
  iconSvgType: string;
  skills: { name: string; level: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class SkillsDataService {
  private categories: SkillCategory[] = [
    {
      title: 'Backend & Architecture',
      tag: 'Core Engineering',
      iconSvgType: 'server',
      skills: [
        { name: 'Java / Spring Boot', level: 'Avancé' },
        { name: 'REST APIs & Microservices', level: 'Avancé' },
        { name: 'PostgreSQL & MySQL', level: 'Avancé' },
        { name: 'Architectures Distribuées', level: 'Intermédiaire' }
      ]
    },
    {
      title: 'Frontend & UI',
      tag: 'Interface Design',
      iconSvgType: 'code',
      skills: [
        { name: 'HTML5 / SCSS / Design Systems', level: 'Avancé' },
        { name: 'Angular (TypeScript)', level: 'Intermédiaire' },
        { name: 'React (JS/TS)', level: 'Intermédiaire' },
        { name: 'RxJS & State Management', level: 'Intermédiaire' }
      ]
    },
    {
      title: 'DevOps, IA & QA',
      tag: 'Reliability & Tools',
      iconSvgType: 'cpu',
      skills: [
        { name: 'Git & Git Flow / CI-CD', level: 'Avancé' },
        { name: 'Tests Unitaires & Intégration', level: 'Avancé' },
        { name: 'Docker & Conteneurisation', level: 'Intermédiaire' },
        { name: 'Python & Machine Learning', level: 'Intermédiaire' }
      ]
    }
  ];

  getSkillCategories(): SkillCategory[] {
    return this.categories;
  }
}