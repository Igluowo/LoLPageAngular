import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pag-campeones',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './pag-campeones.component.html',
  styleUrl: './pag-campeones.component.css'
})
export class PagCampeonesComponent {
  campeonesDestacados = [
    {"nombre": "Renata Glasc", "imagen": "assets/imagenes/Campeones/Renata.jpg", "destacado": false},
  {"nombre": "Nilah", "imagen": "assets/imagenes/Campeones/Nilah.jpg", "destacado": false},
  {"nombre": "Bel'Veth", "imagen": "assets/imagenes/Campeones/BELVETH.jpg", "destacado": false},
  {"nombre": "Zeri", "imagen": "assets/imagenes/Campeones/Zeri.jpg", "destacado": false},
  {"nombre": "K'sante", "imagen": "assets/imagenes/Campeones/ksante.jpg", "destacado": true},
  {"nombre": "Urf", "imagen": "assets/imagenes/Campeones/Urf.jpg", "destacado": false},
  {"nombre": "Ivern", "imagen": "assets/imagenes/Campeones/Ivern.jpg", "destacado": false},
  {"nombre": "Warwick", "imagen": "assets/imagenes/Campeones/Warwick.jpg", "destacado": false},
  {"nombre": "Ornn", "imagen": "assets/imagenes/Campeones/Ornn.png", "destacado": false},
  {"nombre": "Quinn", "imagen": "assets/imagenes/Campeones/quinn.jpg", "destacado": true},
  {"nombre": "Sylas", "imagen": "assets/imagenes/Campeones/Sylas.jpg", "destacado": false},
  {"nombre": "Ezreal", "imagen": "assets/imagenes/Campeones/Ezreal.jpg", "destacado": false},
  {"nombre": "Sona", "imagen": "assets/imagenes/Campeones/Sona.jpg", "destacado": false},
  {"nombre": "Thresh", "imagen": "assets/imagenes/Campeones/Thresh.jpg", "destacado": false},
  {"nombre": "Fiora", "imagen": "assets/imagenes/Campeones/fiora.jpg", "destacado": true},
  ]
}
