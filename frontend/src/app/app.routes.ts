import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ContactComponent } from './features/contact/contact.component';
import { AdminComponent } from './features/admin/admin.component';
import { BlogComponent } from './features/blog/blog.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },                 // Accueil / Dashboard
  { path: 'profile', component: ExperienceComponent },    // Profil & Expérience
  { path: 'skills', component: SkillsComponent },         // Compétences
  { path: 'projects', component: ProjectsComponent },     // Projets (Vidéos / Réalisations)
  { path: 'contact', component: ContactComponent },       // Contact
  { path: 'admin', component: AdminComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', redirectTo: '' }
];