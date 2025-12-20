import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FinanceService {
  private base = '/api'; // proxy rewrites /api -> backend

  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http.get<any[]>(`${this.base}/orders/`).toPromise();
  }

  getExpenses() {
    return this.http.get<any[]>(`${this.base}/expenses/`).toPromise();
  }

  createOrder(payload: any) {
    return this.http.post(`${this.base}/orders/`, payload).toPromise();
  }

  createExpense(payload: any) {
    return this.http.post(`${this.base}/expenses/`, payload).toPromise();
  }

  deleteOrder(id: string) {
    return this.http.delete(`${this.base}/orders/${id}`).toPromise();
  }

  deleteExpense(id: string) {
    return this.http.delete(`${this.base}/expenses/${id}`).toPromise();
  }
}
