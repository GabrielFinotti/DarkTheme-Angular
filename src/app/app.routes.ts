import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { SobreComponent } from './core/pages/sobre/sobre.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'sobre', component: SobreComponent },
];
