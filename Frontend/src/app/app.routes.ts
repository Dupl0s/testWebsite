import { Routes } from '@angular/router';
import { ComplimentsComponent } from './compliments/compliments.component';
import { HalloComponent } from './hallo/hallo.component';

export const routes: Routes = [
  { path: 'compliments', component: ComplimentsComponent },
  { path: 'hallo', component: HalloComponent },
];
