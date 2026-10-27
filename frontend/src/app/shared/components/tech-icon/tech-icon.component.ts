import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-icon.component.html',
  styleUrl: './tech-icon.component.scss'
})
export class TechIconComponent {
  @Input({ required: true }) name!: string; // Ex: 'angular', 'springboot', 'docker', 'java'
  @Input() size: number = 24;               // Taille en px
  @Input() color: string = 'currentColor';  // Couleur personnalisable ou neon
}