import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminAuthService } from '../../core/services/admin-auth.service';
import { ProjectService } from '../../core/services/project.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  authService = inject(AdminAuthService);
  projectService = inject(ProjectService);

  passwordInput: string = '';
  loginError: boolean = false;

  projects = this.projectService.getProjects();

  onLogin(): void {
    const success = this.authService.login(this.passwordInput);
    if (!success) {
      this.loginError = true;
    } else {
      this.loginError = false;
    }
  }

  onLogout(): void {
    this.authService.logout();
  }
}