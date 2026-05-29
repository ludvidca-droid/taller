import { Component } from '@angular/core';
import { Favoritos as FavoritosService, FavoritoItem } from '../../servicios/favoritosService';
import { CarritoService } from '../../servicios/carrito-service';


@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos {
  constructor(
    private favoritosService: FavoritosService,
    private carritoService: CarritoService
  ) {}

  get favoritos() {
    return this.favoritosService.favoritos as FavoritoItem[];
  }
  
  eliminarFavorito(id: number, tipo?: string) {
    this.favoritosService.eliminarFavorito(id, tipo as any);
  }

  comprar(producto: any, tipo: 'producto' | 'oferta'): void {
    if (tipo === 'oferta' && producto.descuento) {
      const precioConDescuento = producto.precio * (1 - producto.descuento / 100);
      const ofertaConDescuento = {
        ...producto,
        precio: parseFloat(precioConDescuento.toFixed(2)),
        tipo,
        cantidad: 1,
      };
      this.carritoService.agregarAlCarrito(ofertaConDescuento, tipo);
    } else {
      this.carritoService.agregarAlCarrito({ ...producto, tipo }, tipo);
    }
  }
}
