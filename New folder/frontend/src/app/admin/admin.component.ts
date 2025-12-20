import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../services/finance.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  orders: any[] = [];
  expenses: any[] = [];

  newOrder: any = { item: '', amount: null, description: '' };
  newExpense: any = { item: '', amount: null, description: '' };

  constructor(private svc: FinanceService) {}

  ngOnInit() {
    this.refresh();
  }

  async refresh() {
    this.orders = await this.svc.getOrders();
    this.expenses = await this.svc.getExpenses();
  }

  async createOrder() {
    await this.svc.createOrder(this.newOrder);
    this.newOrder = { item: '', amount: null, description: '' };
    this.refresh();
  }

  async createExpense() {
    await this.svc.createExpense(this.newExpense);
    this.newExpense = { item: '', amount: null, description: '' };
    this.refresh();
  }

  async deleteOrder(id: string) {
    await this.svc.deleteOrder(id);
    this.refresh();
  }

  async deleteExpense(id: string) {
    await this.svc.deleteExpense(id);
    this.refresh();
  }
}
