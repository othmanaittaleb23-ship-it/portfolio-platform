import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {
  private profileData = {
    fullName: 'Othman Aït Taleb',
    title: 'Software Engineer & Full Stack Developer',
    specialties: ['Java Spring Boot', 'Angular', 'Distributed Architectures', 'DevOps'],
    bio: 'Jeune ingénieur en génie informatique, spécialisé dans la conception d’applications robustes à fort trafic. Formé chez DXC Technology.',
    github: 'https://github.com/othmanaittaleb23-ship-it',
    linkedin: 'https://linkedin.com/in/othman-ait-taleb-074199368',
    email: 'othmanaittaleb23@gmail.com'
  };

  getProfile() {
    return this.profileData;
  }
}