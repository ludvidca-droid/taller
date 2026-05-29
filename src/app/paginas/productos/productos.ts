import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { Carrito } from '../../compartidos/carrito/carrito';
import { CarritoService } from '../../servicios/carrito-service';
import { Favoritos } from '../../servicios/favoritosService';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})

export class Productos {
  constructor(
    private carrito: CarritoService,
    private favoritosService: Favoritos
  ) {}

  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Mouse Wireless Logitech Gaming G502x Plus Black',
      descripcion: 'Mouse inalámbrico de alta precisión para gaming con diseño ergonómico',
      precio: 118.99,
      imagenUrl: 'assets/mouse-wireless-logitech-gaming-g502x-plus-black-910006161-2.jpg',
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'Auriculares Logitech G733 Lightspeed',
      descripcion: 'Auriculares inalámbricos para gaming con sonido 7.1 RGB',
      precio: 119.99,
      imagenUrl: 'assets/71xNjrzG69L._AC_SL1500_.jpg',
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'mousepad gaming genius gx gaming mercurio 300x250mm',
      descripcion: 'Mousepad gaming con diseño ergonómico',
      precio: 14.99,
      imagenUrl: 'assets/41100-producto-31250007400-21.jpg',
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'teclado gaming gadnic gamer009 rgb mecanico switch blue',
      descripcion: 'Teclado gaming mecánico con interruptores azules y retroiluminación RGB',
      precio: 29.99,
      imagenUrl: 'assets/1000x1000-GAMER009.jpg',
      disponibilidad: true 
    },
    {
      id: 5,
      nombre: 'monitor 27 viewsonic vx2716a ips fhd 120hz oc 1ms hdmi dp usbc 0',
      descripcion: 'Monitor gaming con pantalla IPS de 27 pulgadas, resolución FHD y tasa de refresco de 120Hz',
      precio: 179.99,
      imagenUrl: 'assets/monitor-27-viewsonic-vx2716a-ips-fhd-120hz-oc-1ms-hdmi-dp-usbc-0.jpg',
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'antisag gpu',
      descripcion: 'Antisag para GPU que ayuda a prevenir la caída de la tarjeta gráfica en el gabinete',
      precio: 19.99,
      imagenUrl: 'assets/41Hz3HtLZSL.jpg',
      disponibilidad: true
    },
    {
      id: 7,
      nombre: 'Asus ROG Strix Hero II',
      descripcion: '15.6 pulgadas, 144 Hz, tipo IPS Full HD, NVIDIA GeForce RTX 2060, Intel Core i7-8750H, DDR4 de 16 GB, SSD PCIe Nvme de 512 GB, RGB KB, Windows 10, GL504GV-DS74.',
      precio: 899.99,
      imagenUrl: 'assets/81RIr5YR3QL._AC_SL1500_.jpg',
      disponibilidad: true
    },
    {
      id: 8,
      nombre: 'ASUS ROG Strix G16',
      descripcion: 'GeForce RTX 5070 Ti 12GB GDDR7 | Pantalla WUXGA de 300 nits de 16 pulgadas | AMD Ryzen 9 8940HX(16 núcleos) | KB retroiluminado | Win 11 Pro | w/accesorios |',
      precio: 3139.00,
      imagenUrl: 'assets/71LAsSst0mL._AC_SL1500_.jpg',
      disponibilidad: true
    },
    {
      id: 9,
      nombre: 'ASUS Vivobook 14',
      descripcion: 'Pantalla WUXGA de 14” 60Hz, Qualcomm Snapdragon X, GPU Qualcomm Adreno, 16GB RAM, SSD de 512GB, Windows 11, Plata Claro, X1407QA-BS56',
      precio: 462.93,
      imagenUrl: 'assets/71bDn9todpL._AC_SL1500_.jpg',
      disponibilidad: true
    },
    {
      id: 10,
      nombre: 'Acer Nitro V',
      descripcion: 'Procesador Intel Core 9 270H | GPU para portátil NVIDIA GeForce RTX 5070 | Pantalla IPS WUXGA de 16" con 180Hz | 32GB DDR5 | SSD Gen 4 de 1TB | Wi-Fi 6 |',
      precio: 1499.99,
      imagenUrl: 'assets/71bemAPYnxL._AC_SL1500_.jpg',
      disponibilidad: true
    }
  ]

  agregarAlCarrito(p: Producto) { 
    this.carrito.agregarAlCarrito(p);
  }

  isFavorito(p: Producto): boolean {
    return this.favoritosService.isFavorito(p, 'producto');
  }

  toggleFavorito(p: Producto): void {
    if (this.isFavorito(p)) {
      this.favoritosService.eliminarFavorito(p.id, 'producto');
    } else {
      this.favoritosService.agregarFavorito(p, 'producto');
    }
  }
}

