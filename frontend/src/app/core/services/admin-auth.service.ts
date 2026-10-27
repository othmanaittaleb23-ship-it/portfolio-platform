import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  // Utilisation d'un signal Angular pour l'état de connexion
  isAuthenticated = signal<boolean>(false);

  login(password: string): boolean {
    // Mot de passe simple pour le portfolio (peut être sécurisé davantage)
    if (password === 'admin2026') {
      this.isAuthenticated.set(true);
      localStorage.setItem('isAdmin', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated.set(false);
    localStorage.removeItem('isAdmin');
  }

  checkAuth(): boolean {
    const isSaved = localStorage.getItem('isAdmin') === 'true';
    this.isAuthenticated.set(isSaved);
    return isSaved;
  }
}