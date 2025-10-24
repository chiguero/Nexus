import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Libro } from '../../data';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css']
})
export class Carrito implements OnInit, OnDestroy {
  carrito: Libro[] = [];
  sub!: Subscription;

  constructor(private cart: CartService) {}

  ngOnInit() {
    this.sub = this.cart.items$.subscribe(items => this.carrito = items);
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  remove(libroId: number) {
    this.cart.remove(libroId);
  }

  clear() {
    this.cart.clear();
  }

  get total(): number {
    return this.cart.total();
  }
}