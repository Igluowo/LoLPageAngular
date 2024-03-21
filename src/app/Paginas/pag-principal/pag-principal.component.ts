import { Component } from '@angular/core';
import { CarrouselComponent } from '../../Components/carrousel/carrousel.component';
import { CampeonesComponent } from '../../Components/campeones/campeones.component';

@Component({
  selector: 'app-pag-principal',
  standalone: true,
  imports: [
    CarrouselComponent,
    CampeonesComponent
  ],
  templateUrl: './pag-principal.component.html',
  styleUrl: './pag-principal.component.css'
})
export class PagPrincipalComponent {
    iterations = 5;
}
