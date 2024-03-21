import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedDataService } from '../../shared-data.service';

@Component({
  selector: 'app-navegador',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navegador.component.html',
  styleUrl: './navegador.component.css'
})
export class NavegadorComponent {
  constructor(private sharedDataService: SharedDataService) {}

  usoLogin() {
    this.sharedDataService.botonLogin = true
  }
}
