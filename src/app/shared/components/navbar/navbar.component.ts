import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
})
export class Navbar {
  private auth = inject(AuthService);
  private router = inject(Router);

  logout() {
    this.auth.logout();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return this.auth.isLoggedIn();
  }

  userRole() {
    return this.auth.user?.role;
  }
}
