import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class CarrouselComponent implements OnInit{
  currentIndex: number = 0;
  images: string[] = [
    "assets/imagenes/Campeones/Ezreal.jpg", 
    "assets/imagenes/Campeones/Sona.jpg", 
    "assets/imagenes/Campeones/Thresh.jpg"
  ]

  ngOnInit() {
    
  }

  prevSlide() {
    console.log("Ola prev");
    
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide() {
    console.log("Ola next");
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
