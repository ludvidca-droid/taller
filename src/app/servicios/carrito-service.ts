import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  carrito: Producto[] = [];
  
  agregarAlCarrito(p: Producto) {
    const productoExistente = this.carrito.find(item => item.id === p.id);

    if (productoExistente) {
      productoExistente.cantidad = (productoExistente.cantidad ?? 1) + 1;
      return;
    }

    this.carrito.push({
      ...p,
      cantidad: 1,
    });
  }

  cambiarCantidad(productoId: number, delta: number) {
    const producto = this.carrito.find(item => item.id === productoId);
    if (!producto) {
      return;
    }

    producto.cantidad = Math.max(1, (producto.cantidad ?? 1) + delta);
  }

  obtenerCarrito(): Producto[] {
    return this.carrito;
  }

  eliminarDelCarrito(productoId: number) {
    this.carrito = this.carrito.filter(p => p.id !== productoId);
  }
}
