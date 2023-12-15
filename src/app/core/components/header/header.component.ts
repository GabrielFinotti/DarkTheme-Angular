import { Component } from '@angular/core';
import { ETheme } from '../../../enums/etheme';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // Variáveis do componente
  public icon!: ETheme;

  constructor() {
    this.icon = ETheme.ICON_MOON;
  }

  public toggle() {
    const theme = document.body.classList.toggle('dark-theme');

    if (theme) {
      this.icon = ETheme.ICON_SUN;
    } else {
      this.icon = ETheme.ICON_MOON;
    }
  }
}
