import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Valentinstag-Überraschung';

  // Reveal-System: step 0 = Start, jeder Klick enthüllt mehr
  step = 0;
  maxSteps = 8;

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  envelopeOpen = false;
  showConfetti = false;
  finalRevealed = false;

  private timer: any;

  ngOnInit(): void {
    this.updateCountdown();
    this.timer = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  updateCountdown(): void {
    const valentine = new Date('2026-02-14T00:00:00');
    const now = new Date();
    const diff = valentine.getTime() - now.getTime();

    if (diff <= 0) {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      return;
    }

    this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    this.minutes = Math.floor((diff / (1000 * 60)) % 60);
    this.seconds = Math.floor((diff / 1000) % 60);
  }

  nextStep(): void {
    if (this.step < this.maxSteps) {
      this.step++;
      // Auto-scroll nach unten
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 100);

      // Konfetti bei bestimmten Steps
      if (this.step === 3 || this.step === this.maxSteps) {
        this.triggerConfetti();
      }
    }
  }

  toggleEnvelope(): void {
    this.envelopeOpen = !this.envelopeOpen;
  }

  triggerConfetti(): void {
    this.showConfetti = true;
    setTimeout(() => (this.showConfetti = false), 3500);
  }

  revealFinal(): void {
    this.finalRevealed = true;
    this.triggerConfetti();
  }
}
