import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavegadorComponent } from './Components/navegador/navegador.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PagPrincipalComponent } from './Paginas/pag-principal/pag-principal.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavegadorComponent,
    FooterComponent,
    PagPrincipalComponent,
    RouterLink
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pagina-lol';
}
