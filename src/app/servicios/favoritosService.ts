import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

export type FavoritoTipo = 'producto' | 'oferta';

export interface FavoritoItem {
  producto: Producto;
  tipo: FavoritoTipo;
}

@Injectable({
  providedIn: 'root',
})
export class Favoritos {
  favoritos: FavoritoItem[] = [];

  agregarFavorito(p: Producto, tipo: FavoritoTipo = 'producto') {
    if (!this.favoritos.some(item => item.producto.id === p.id && item.tipo === tipo)) {
      this.favoritos.push({ producto: p, tipo });
    }
  }

  eliminarFavorito(productoId: number, tipo?: FavoritoTipo) {
    if (tipo) {
      this.favoritos = this.favoritos.filter(p => !(p.producto.id === productoId && p.tipo === tipo));
    } else {
      this.favoritos = this.favoritos.filter(p => p.producto.id !== productoId);
    }
  }

  isFavorito(p: Producto, tipo: FavoritoTipo = 'producto'): boolean {
    return this.favoritos.some(item => item.producto.id === p.id && item.tipo === tipo);
  }
}
