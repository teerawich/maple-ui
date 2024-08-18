import { Component } from '@angular/core';
import { Expense } from '../../interfaces/expense';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [TableModule],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss',
})
export class ExpenseComponent {
  expenses: Expense[] = [];
}
