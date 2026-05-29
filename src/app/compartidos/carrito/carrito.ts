import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoService } from '../../servicios/carrito-service';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css'],
})
export class Carrito implements OnInit {
  carrito: Producto[] = [];
  
  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carrito = this.carritoService.obtenerCarrito();
  }
  
  eliminarDelCarrito(productoId: number, tipo: 'producto' | 'oferta' = 'producto') {
    this.carritoService.eliminarDelCarrito(productoId, tipo);
    this.carrito = this.carritoService.obtenerCarrito();
  }

  get total(): number {
    return this.carrito.reduce(
      (suma, producto) => suma + producto.precio * (producto.cantidad ?? 1),
      0
    );
  }

  incrementarCantidad(productoId: number, tipo: 'producto' | 'oferta' = 'producto') {
    this.carritoService.cambiarCantidad(productoId, 1, tipo);
    this.carrito = this.carritoService.obtenerCarrito();
  }

  disminuirCantidad(productoId: number, tipo: 'producto' | 'oferta' = 'producto') {
    this.carritoService.cambiarCantidad(productoId, -1, tipo);
    this.carrito = this.carritoService.obtenerCarrito();
  }
}
