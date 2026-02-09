import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService, Role } from '../services/auth';

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  // Verificar login
  if (!auth.isLoggedIn()) {
    router.navigate(['/']);
    return false;
  }

  // Verificar rol si se especifica en la ruta
  const expectedRole = route.data['role'] as Role;
  if (expectedRole && !auth.hasRole(expectedRole)) {
    router.navigate(['/']);
    return false;
  }

  return true;
};
