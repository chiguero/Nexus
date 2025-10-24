import { Injectable } from '@angular/core';
import { Libro } from '../data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _items = new BehaviorSubject<Libro[]>([]);
  items$ = this._items.asObservable();

  get items(): Libro[] {
    return this._items.getValue();
  }

  add(libro: Libro) {
    this._items.next([...this.items, libro]);
  }

  remove(libroId: number) {
    this._items.next(this.items.filter(i => i.id !== libroId));
  }

  clear() {
    this._items.next([]);
  }

  total(): number {
    return this.items.reduce((s, i) => s + i.precio, 0);
  }
}