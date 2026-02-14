import { Component } from '@angular/core';
import { Footer } from '../../shared/components/footer/footer.component';
import { Navbar } from '../../shared/components/navbar/navbar.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  selector: 'app-public-shell',
  imports: [Navbar, Footer, CardModule, ButtonModule],
  template: `
    <app-navbar></app-navbar>

    <main>
      <p-card header="Hola PrimeNG">
        <p-button label="Click aquí"></p-button>
      </p-card>
    </main>

    <app-footer></app-footer>
  `,
})
export class PublicShellComponent {}
