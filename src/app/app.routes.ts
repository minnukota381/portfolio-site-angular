import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

// Define your routes as an array of Route objects
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // Add more routes as needed
];
