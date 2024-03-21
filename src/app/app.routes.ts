import { Routes } from '@angular/router';
import { PagPrincipalComponent } from './Paginas/pag-principal/pag-principal.component';
import { PagCampeonesComponent } from './Paginas/pag-campeones/pag-campeones.component';

export const routes: Routes = [
    {path: 'principal', component: PagPrincipalComponent},
    {path: 'champs', component: PagCampeonesComponent}
];