import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/layouts/dashboard-layout/dashboard-layout'),
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
