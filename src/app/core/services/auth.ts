import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

export type Role = 'guest' | 'client' | 'admin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Usuario actual (null si no logueado)
  private _user: { username: string; role: Role } | null = null;

  // Router inyectado con inject()
  private router = inject(Router);

  // Login simulado
  login(username: string, password: string): boolean {
    if (username && password) {
      // Ejemplo simple: rol según usuario
      const role: Role = username === 'admin' ? 'admin' : 'client';
      this._user = { username, role };
      return true;
    }
    return false;
  }

  // Logout
  logout() {
    this._user = null;
    this.router.navigate(['/']);
  }

  // Estado de login
  isLoggedIn(): boolean {
    return !!this._user;
  }

  // Obtener usuario actual
  get user() {
    return this._user;
  }

  // Verificar rol
  hasRole(role: Role): boolean {
    return this._user?.role === role;
  }
}
