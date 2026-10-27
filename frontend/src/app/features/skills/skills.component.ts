import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsDataService, SkillCategory } from '../../core/services/skills-data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  private skillsService = inject(SkillsDataService);
  skillCategories: SkillCategory[] = [];

  ngOnInit(): void {
    this.skillCategories = this.skillsService.getSkillCategories();
  }
}