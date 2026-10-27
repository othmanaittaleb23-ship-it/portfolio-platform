import { Component, ElementRef, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cyber-background',
  standalone: true,
  imports: [CommonModule],
  template: `<canvas #cyberCanvas></canvas>`,
  styles: [`
    canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -1;
      pointer-events: none;
      background: var(--bg-app);
    }
  `]
})
export class CyberBackgroundComponent implements OnInit, OnDestroy {
  @ViewChild('cyberCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private animationId: number = 0;
  private particles: Array<{ x: number; y: number; vx: number; vy: number; size: number }> = [];

  ngOnInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();
    this.initParticles();
    this.animate();
  }

  @HostListener('window:resize')
  resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  initParticles() {
    this.particles = [];
    const numParticles = Math.floor(window.innerWidth / 35);
    for (let i = 0; i < numParticles; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2 + 1
      });
    }
  }

  animate = () => {
    this.animationId = requestAnimationFrame(this.animate);
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // Style des nœuds et des lignes néons (aux couleurs de ton design system)
    this.ctx.fillStyle = 'rgba(0, 242, 254, 0.6)';
    this.ctx.strokeStyle = 'rgba(0, 242, 254, 0.07)';
    this.ctx.lineWidth = 1;

    for (let i = 0; i < this.particles.length; i++) {
      let p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
      if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();

      // Relier les particules proches pour créer un effet de grille de données / réseau
      for (let j = i + 1; j < this.particles.length; j++) {
        let p2 = this.particles[j];
        let dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 130) {
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }
    }
  };

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
  }
}