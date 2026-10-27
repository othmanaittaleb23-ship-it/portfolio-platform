import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvDataService, ExperienceItem, CertificationItem } from '../../core/services/cv-data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  private cvService = inject(CvDataService);
  
  experiences: ExperienceItem[] = [];
  certifications: CertificationItem[] = [];

  ngOnInit(): void {
    this.experiences = this.cvService.getExperiences();
    this.certifications = this.cvService.getCertifications();
  }
}