import { Routes } from '@angular/router';
import { ComplimentsComponent } from './components/compliments/compliments.component';
import { TestComponent } from './components/test/test.component';

export const routes: Routes = [
  { path: 'compliments', component: ComplimentsComponent },
  { path: 'test', component: TestComponent },

];
