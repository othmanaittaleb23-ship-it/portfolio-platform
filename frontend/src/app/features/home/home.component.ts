import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HomeDataService } from '../../core/services/home-data.service';
import { StatsDataService, StatItem } from '../../core/services/stats-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private homeService = inject(HomeDataService);
  private statsService = inject(StatsDataService);

  profile: any;
  stats: StatItem[] = [];

  ngOnInit(): void {
    this.profile = this.homeService.getProfile();
    this.stats = this.statsService.getStats();
  }
}