import { Injectable } from '@angular/core';

export interface StatItem {
  label: string;
  value: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class StatsDataService {
  private stats: StatItem[] = [
    { label: 'Années d’expérience / Stage PFE', value: '6 Mois+', icon: '🚀' },
    { label: 'Projets Full Stack Réalisés', value: '4+', icon: '💻' },
    { label: 'Certifications Internationales', value: '6+', icon: '🏆' },
    { label: 'Technologies Maîtrisées', value: '15+', icon: '⚡' }
  ];

  getStats(): StatItem[] {
    return this.stats;
  }
}