import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoService } from '../../servicios/carrito-service';
import { Favoritos } from '../../servicios/favoritosService';

@Component({
  selector: 'app-ofertas',
  imports: [],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas {
  constructor(
    private carritoService: CarritoService,
    private favoritosService: Favoritos
  ) {}

  ofertas: Producto[]=[
    {
      id: 1,
      nombre: 'Motherboard AM5 Asus Prime B650 Plus',
      descripcion: 'Motherboard de última generación con tecnología AM5',
      precio: 199.99,
      imagenUrl: 'assets/Motherboard-AM5-Asus-Prime-B650-Plus.jpg',
      disponibilidad: true,
      descuento: 20
    },
    {
      id: 2,
      nombre: 'Cooler Master MasterLiquid 360 Atmos',
      descripcion: 'Cooler líquido de 360mm para refrigeración eficiente',
      precio: 79.99,
      imagenUrl: 'assets/Hardware-Disipadores-y-Ventiladores-Coolermaster-MLX-D36M-A25PZ-R1-502438-okbZc7DpwOMgaBXT.jpg',
      disponibilidad: true,
      descuento: 15
    },
    {
      id: 3,
      nombre: 'Procesador AMD Ryzen 5 5500',
      descripcion: 'Procesador de última generación con tecnología AM5',
      precio: 49.99,
      imagenUrl: 'assets/u_10237838.jpg',
      disponibilidad: true,
      descuento: 10
    },
    {
      id: 4,
      nombre: 'Fuente Cooler Master MWE Gold 850 V2 850W 80 Plus Gold Modular',
      descripcion: 'Fuente de alimentación de 850W con certificación 80 Plus Gold',
      precio: 129.99,
      imagenUrl: 'assets/309_24-06-2024-05-06-14-fuente-cooler-master-mwe-gold-850-v2-850w-80-plus-gold-modular-pnmpe-8501-afaag-u2.jpg',
      disponibilidad: true,
      descuento: 25
    },
    {
      id: 5,
      nombre: 'GPU amd rx 7600',
      descripcion: 'Tarjeta gráfica de última generación con tecnología AMD RDNA 3',
      precio: 199.99,
      imagenUrl: 'assets/81asxT0eljL._AC_SL1500_.jpg',
      disponibilidad: true,
      descuento: 30
    },
    {
      id: 6,
      nombre: 'RAM kingston fury beast 16gb (2x8gb) 3200mhz ddr4',
      descripcion: 'Memoria RAM de alta velocidad para un rendimiento óptimo',
      precio: 129.99,
      imagenUrl: 'assets/61uXihcspuL._AC_.jpg',
      disponibilidad: true,
      descuento: 20
    }
  ];

  calcularPrecioDescuento(precio: number, descuento: number): number {
    return precio * (1 - descuento / 100);
  }

  agregarAlCarrito(oferta: Producto) {
    const ofertaConDescuento: Producto = {
      ...oferta,
      precio: this.calcularPrecioDescuento(oferta.precio, oferta.descuento ?? 0),
      cantidad: 1,
    };

    this.carritoService.agregarAlCarrito(ofertaConDescuento);
  }

  isFavorito(oferta: Producto): boolean {
    return this.favoritosService.isFavorito(oferta, 'oferta');
  }

  toggleFavorito(oferta: Producto): void {
    if (this.isFavorito(oferta)) {
      this.favoritosService.eliminarFavorito(oferta.id, 'oferta');
    } else {
      this.favoritosService.agregarFavorito(oferta, 'oferta');
    }
  }
}
