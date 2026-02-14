import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  // Rutas públicas bajo PublicShell
  {
    path: '',
    loadComponent: () =>
      import('./layouts/public-shell/public-shell.component').then((m) => m.PublicShellComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/public/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'servicios',
        loadComponent: () =>
          import('./features/public/services/services.component').then((m) => m.ServicesComponent),
      },
      {
        path: 'contacto',
        loadComponent: () =>
          import('./features/public/contact/contact.component').then((m) => m.ContactComponent),
      },
    ],
  },

  // Login fuera de shell
  {
    path: 'login',
    loadComponent: () =>
      import('./features/public/login/login.component').then((m) => m.LoginComponent),
  },

  // Rutas cliente bajo ClientShell
  {
    path: 'client',
    loadComponent: () =>
      import('./layouts/client-shell/client-shell.component').then((m) => m.ClientShellComponent),
    canActivate: [AuthGuard],
    data: { role: 'client' },
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/client/dashboard/dashboard.component').then((m) => m.Dashboard),
      },
      // {
      //   path: 'profile',
      //   loadComponent: () =>
      //     import('./features/client/profile/profile.component')
      //       .then(m => m.ProfileComponent),
      // }
    ],
  },

  // Rutas admin bajo AdminShell
  {
    path: 'admin',
    loadComponent: () =>
      import('./layouts/admin-shell/admin-shell').then((m) => m.AdminShellComponent),
    canActivate: [AuthGuard],
    data: { role: 'admin' },
    children: [
      // {
      //   path: 'users',
      //   loadComponent: () =>
      //     import('./features/admin/users/users.component')
      //       .then(m => m.UsersComponent),
      // }
    ],
  },

  // Wildcard al final
  { path: '**', redirectTo: '' },
];
