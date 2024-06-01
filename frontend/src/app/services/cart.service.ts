import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ENDPOINT } from '../utils/url';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  public getCart(): Observable<Cart> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', `Token ${token}`)
      .set('Content-Type', 'application/json');

    return this.http.get<Cart>(ENDPOINT + 'cart/items', { headers });
  }
}