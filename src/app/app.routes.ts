import { Routes } from '@angular/router';
import DashboardLayout from './shared/layouts/dashboard-layout/dashboard-layout';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayout,
    children: [
      {
        path: 'cv-analizer',
        loadComponent: () => import('./features/cv-analizer/cv-analizer'),
        title: 'CV-Analizer',
      },
      {
        path: '',
        redirectTo: 'cv-analizer',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'cv-analizer',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
