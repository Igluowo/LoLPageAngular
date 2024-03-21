import { Routes } from '@angular/router';
import { PagPrincipalComponent } from './Paginas/pag-principal/pag-principal.component';
import { PagCampeonesComponent } from './Paginas/pag-campeones/pag-campeones.component';
import { PagLoginComponent } from './Paginas/pag-login/pag-login.component';

export const routes: Routes = [
    {path: 'principal', component: PagPrincipalComponent},
    {path: 'champs', component: PagCampeonesComponent},
    {path: 'login', component: PagLoginComponent},
    {path: '**', pathMatch:"full", redirectTo: 'principal'}
];