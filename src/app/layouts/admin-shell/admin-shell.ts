import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-admin-shell',
  imports: [RouterOutlet],
  template: `
    <div>
      <aside>ADMIN SIDEBAR</aside>

      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
})
export class AdminShellComponent {}
