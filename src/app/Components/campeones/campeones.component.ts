import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-campeones',
  templateUrl: './campeones.component.html',
  styleUrl: './campeones.component.css',
  standalone: true,
  imports: [
    CommonModule,

  ]
})
export class CampeonesComponent {
  destacado = [
  {
    titulos: "Más recientes",
    campeones: [
      {"campeonesDestacados": [
        {"nombre": "Renata Glasc", "imagen": "assets/imagenes/Campeones/Renata.jpg", "destacado": false},
      {"nombre": "Nilah", "imagen": "assets/imagenes/Campeones/Nilah.jpg", "destacado": false},
      {"nombre": "Bel'Veth", "imagen": "assets/imagenes/Campeones/BELVETH.jpg", "destacado": false},
      {"nombre": "Zeri", "imagen": "assets/imagenes/Campeones/Zeri.jpg", "destacado": false},
      {"nombre": "K'sante", "imagen": "assets/imagenes/Campeones/ksante.jpg", "destacado": true}
      ]
    }
    ],
    icono: "assets/imagenes/icono_recientes.png"
  },
  {
    titulos:"Más Populares",
    campeones: [
      {"campeonesDestacados": [
        {"nombre": "Warwick", "imagen": "assets/imagenes/Campeones/Warwick.jpg", "destacado": false},
      {"nombre": "Sylas", "imagen": "assets/imagenes/Campeones/Sylas.jpg", "destacado": false},
      {"nombre": "Quinn", "imagen": "assets/imagenes/Campeones/quinn.jpg", "destacado": false},
      {"nombre": "Urf", "imagen": "assets/imagenes/Campeones/Urf.jpg", "destacado": false},
      {"nombre": "Ivern", "imagen": "assets/imagenes/Campeones/Ivern.jpg", "destacado": true}
      ]}
    ],
    icono: "assets/imagenes/icono_trending.png"
  }
  ]
}
