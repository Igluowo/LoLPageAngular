import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../shared-data.service';

@Component({
  selector: 'app-pag-login',
  standalone: true,
  imports: [],
  templateUrl: './pag-login.component.html',
  styleUrl: './pag-login.component.css'
})
export class PagLoginComponent implements OnInit {

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    if(!this.sharedDataService.botonLogin) {
      window.alert("Primero debes iniciar sesión")
    }
      this.sharedDataService.botonLogin = false
  }
}
