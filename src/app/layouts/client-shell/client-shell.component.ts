import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-client-shell',
  imports: [RouterOutlet],
  template: `
    <div>
      <aside>CLIENT SIDEBAR</aside>

      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
})
export class ClientShellComponent {}
