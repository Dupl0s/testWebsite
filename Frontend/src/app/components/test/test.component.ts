import { Component } from '@angular/core';
import complimentsData from './compliments.json'
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NgFor],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  compliments: { id: number; text: string; }[] = [];

  ngOnInit() {
    const savedCompliments = localStorage.getItem('compliments');
    if (savedCompliments) {
      this.compliments = JSON.parse(savedCompliments);
    } else {
      this.compliments = complimentsData.compliments;
      localStorage.setItem('compliments', JSON.stringify(this.compliments));
    }
  }

  addCompliment(text: string) {
    const neuesKompliment = { id: this.compliments.length + 1, text };
    this.compliments.push(neuesKompliment);
    localStorage.setItem('compliments', JSON.stringify(this.compliments));
  }

  clearStorage() {
    localStorage.removeItem('compliments');
    this.compliments = [];
  }
}



