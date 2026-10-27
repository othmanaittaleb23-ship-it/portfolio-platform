import { Injectable } from '@angular/core';

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class CvDataService {
  private experiences: ExperienceItem[] = [
    {
      period: 'Fév. 2026 - Août 2026',
      role: 'Stagiaire Développeur Full Stack (PFE)',
      company: 'DXC Technology',
      location: 'Rabat, Maroc',
      description: 'Développement d’une plateforme Full Stack de gestion de réclamations à fort trafic : API RESTful en Spring Boot et frontend Angular, authentification sécurisée, chatbot intelligent et module de reconnaissance faciale. Travail en méthodologie Agile Scrum.',
      technologies: ['Angular', 'Spring Boot', 'Python', 'Docker', 'PostgreSQL', 'Scrum']
    },
    {
      period: 'Juil. - Août 2025',
      role: 'Stagiaire Développeur Full Stack',
      company: 'Société Nationale de Radiodiffusion et de Télévision (SNRT)',
      location: 'Rabat, Maroc',
      description: 'Conception et développement d’une plateforme de gestion de projets avec React, Spring Boot et MySQL, incluant des API RESTful et des tableaux de bord interactifs pour le suivi des équipes.',
      technologies: ['React', 'Spring Boot', 'MySQL', 'TailwindCSS']
    },
    {
      period: 'Juillet 2024',
      role: 'Stagiaire Technicien Réseaux',
      company: 'ULE Group',
      location: 'Rabat, Maroc',
      description: 'Configuration et maintenance du serveur GoAutoDial, support technique et maintenance des infrastructures réseau.',
      technologies: ['GoAutoDial', 'Networking', 'Linux']
    }
  ];

  private certifications: CertificationItem[] = [
    { title: 'Machine Learning with Python', issuer: 'IBM (Coursera)', date: 'Sept. 2026', category: 'AI & Data' },
    { title: 'Advanced Spring Cloud Microservices & Deployment', issuer: 'Packt (Coursera)', date: 'Déc. 2025', category: 'Backend & Cloud' },
    { title: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift', issuer: 'IBM (Coursera)', date: 'Avr. 2025', category: 'DevOps' },
    { title: 'React Native', issuer: 'Meta (Coursera)', date: 'Avr. 2025', category: 'Frontend' },
    { title: 'Introduction to Git and GitHub', issuer: 'Google (Coursera)', date: 'Avr. 2025', category: 'DevOps' },
    { title: 'Virtual Networks in Azure', issuer: 'Whizlabs (Coursera)', date: 'Avr. 2025', category: 'Cloud' }
  ];

  getExperiences(): ExperienceItem[] {
    return this.experiences;
  }

  getCertifications(): CertificationItem[] {
    return this.certifications;
  }
}