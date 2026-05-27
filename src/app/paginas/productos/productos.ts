import { Component } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
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
    }
  ]

  
}
