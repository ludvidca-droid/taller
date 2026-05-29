import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  carrito: Producto[] = [];
  
  private esMismoProducto(item: Producto, p: Producto): boolean {
    const tipoItem = item.tipo ?? 'producto';
    const tipoProducto = p.tipo ?? 'producto';
    return item.id === p.id && tipoItem === tipoProducto;
  }

  agregarAlCarrito(p: Producto, tipo: 'producto' | 'oferta' = p.tipo ?? 'producto') {
    const productoConTipo: Producto = {
      ...p,
      tipo,
    };

    const productoExistente = this.carrito.find(item => this.esMismoProducto(item, productoConTipo));

    if (productoExistente) {
      productoExistente.cantidad = (productoExistente.cantidad ?? 1) + 1;
      return;
    }

    this.carrito.push({
      ...productoConTipo,
      cantidad: 1,
    });
  }

  cambiarCantidad(productoId: number, delta: number, tipo: 'producto' | 'oferta' = 'producto') {
    const producto = this.carrito.find(item => item.id === productoId && (item.tipo ?? 'producto') === tipo);
    if (!producto) {
      return;
    }

    producto.cantidad = Math.max(1, (producto.cantidad ?? 1) + delta);
  }

  obtenerCarrito(): Producto[] {
    return this.carrito;
  }

  eliminarDelCarrito(productoId: number, tipo: 'producto' | 'oferta' = 'producto') {
    this.carrito = this.carrito.filter(item => !(item.id === productoId && (item.tipo ?? 'producto') === tipo));
  }
}
