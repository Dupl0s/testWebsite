import { RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angis Website';
  urlName: string | null = '';
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    // Auf jede Navigation hören
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentUrl = this.router.url;
        const segments = currentUrl.split('/');
        const secondSegement = segments[1];
        switch (secondSegement) {
          case 'compliments':
            this.urlName = 'Komplimente';
            break;
          case 'hallo':
            this.urlName = 'Hallo';
            break;
          default:
            this.urlName = 'Home';
            break;
        }
      });
  }
}
