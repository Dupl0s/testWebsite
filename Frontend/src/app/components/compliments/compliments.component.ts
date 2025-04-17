import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-compliments',
  standalone: true,
  imports: [NgIf],
  templateUrl: './compliments.component.html',
  styleUrl: './compliments.component.css'
})

export class ComplimentsComponent {
  compliments = [
    { id: 1, text: "Du bist das Beste, was mir je passiert ist", date: "17.04.2025" },
    { id: 2, text: "Dein Lächeln erhellt meinen Tag, bebs!", date: "17.04.2025" },
    { id: 3, text: "Du bist unglaublich talentiert, bebs!", date: "17.04.2025" },
    { id: 4, text: "Mit dir ist jeder Moment besonders, bebs!", date: "17.04.2025" },
    { id: 5, text: "Du hast ein Herz aus Gold, bebs!", date: "17.04.2025" },
    { id: 6, text: "Du bist meine größte Inspiration, bebs!", date: "17.04.2025" },
    { id: 7, text: "Du machst mich so glücklich, bebs!", date: "17.04.2025" },
    { id: 8, text: "Du bist wunderschön, bebs!", date: "17.04.2025" },
    { id: 9, text: "Du hast eine unglaubliche Ausstrahlung, bebs!", date: "17.04.2025" },
    { id: 10, text: "Du bist mein Fels in der Brandung, bebs!", date: "17.04.2025" },
    { id: 11, text: "Du bringst Freude in mein Leben, bebs!", date: "17.04.2025" },
    { id: 12, text: "Du bist so liebevoll und fürsorglich, bebs!", date: "17.04.2025" },
    { id: 13, text: "Du bist mein bester Freund, bebs!", date: "17.04.2025" },
    { id: 14, text: "Du bist so klug und weise, bebs!", date: "17.04.2025" },
    { id: 15, text: "Du hast ein wunderbares Lachen, bebs!", date: "17.04.2025" },
    { id: 16, text: "Du bist meine Seelenverwandte, bebs!", date: "17.04.2025" },
    { id: 17, text: "Du machst die Welt zu einem besseren Ort, bebs!", date: "17.04.2025" },
    { id: 18, text: "Du bist so kreativ und einfallsreich, bebs!", date: "17.04.2025" },
    { id: 19, text: "Du bist mein Glücksbringer, bebs!", date: "17.04.2025" },
    { id: 20, text: "Du bist einfach einzigartig, bebs!", date: "17.04.2025" }
  ];
  
   randomCompliment: any;
  
   ngOnInit() {
   this.selectRandomCompliment();
   }
  
   selectRandomCompliment() {
   const randomIndex = Math.floor(Math.random() * this.compliments.length);
   this.randomCompliment = this.compliments[randomIndex];
   }
  
}
