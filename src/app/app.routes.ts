import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  // Login
  {
    path: 'login',
    loadComponent: () =>
      import('./features/public/login/login-component').then((m) => m.LoginComponent),
  },

  // Layout público (home, servicios, contacto)
  {
    path: '',
    loadComponent: () => import('./layouts/main-layout/main-layout').then((m) => m.MainLayout),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/public/home/home-component').then((m) => m.HomeComponent),
      },
      {
        path: 'servicios',
        loadComponent: () =>
          import('./features/public/services/services-component').then((m) => m.ServicesComponent),
      },
      {
        path: 'contacto',
        loadComponent: () =>
          import('./features/public/contact/contact-component').then((m) => m.ContactComponent),
      },
    ],
  },

  // Rutas privadas protegidas por guard
  {
    path: 'client',
    loadComponent: () =>
      import('./features/client/dashboard/dashboard-component').then((m) => m.DashboardClient),
    canActivate: [AuthGuard],
    data: { role: 'client' },
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./features/admin/dashboard/dashboard-component').then((m) => m.DashboardAdmin),
    canActivate: [AuthGuard],
    data: { role: 'admin' },
  },

  // Redirigir cualquier otra ruta al login
  { path: '**', redirectTo: 'login' },
];
