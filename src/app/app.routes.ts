import { Routes } from '@angular/router';
import path from 'path';
import { Productos } from './paginas/productos/productos';
import { Ofertas } from './paginas/ofertas/ofertas';
import { Contacto } from './paginas/contacto/contacto';
import { Nav } from './compartidos/nav/nav';
import { Footer } from './compartidos/footer/footer';
import { Favoritos } from './compartidos/favoritos/favoritos';
import { Carrito } from './compartidos/carrito/carrito';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';
import { Registro } from './auth/registro/registro';
import { Inicio } from './paginas/inicio/inicio';



export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: Inicio},
    {path: `Productos`, component: Productos},
    {path: `Ofertas`, component: Ofertas},
    {path: `Contacto`, component: Contacto},
    {path: `nav`, component: Nav},
    {path: `footer`, component: Footer},
    {path: `favoritos`, component: Favoritos},
    {path: `carrito`, component: Carrito},
    {path: `inicio-sesion`, component: InicioSesion},
    {path: `registro`, component: Registro},

    {path: '**', redirectTo: 'inicio'}
];
