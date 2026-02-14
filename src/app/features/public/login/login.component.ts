import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-component',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  private auth = inject(AuthService);
  private router = inject(Router);

  get isLoggedIn() {
    return this.auth.isLoggedIn;
  }

  login() {
    // Intentar login con AuthService
    if (this.auth.login(this.username, this.password)) {
      // Redirigir según rol
      if (this.auth.hasRole('admin')) {
        this.router.navigate(['/admin']);
      } else if (this.auth.hasRole('client')) {
        this.router.navigate(['/client']);
      } else {
        this.router.navigate(['/']); // fallback
      }
    } else {
      this.error = 'Credenciales no válidas';
    }
  }
}
