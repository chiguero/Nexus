import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LIBROS, Libro } from '../../data';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-masvendidos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './masvendidos.html',
  styleUrls: ['./masvendidos.css']
})
export class Masvendidos {
  libros: Libro[] = LIBROS.slice(0, 4);

  constructor(private cart: CartService) {}

  addToCart(libro: Libro) {
    this.cart.add(libro);
  }
}
