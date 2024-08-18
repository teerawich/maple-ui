import { Component } from '@angular/core';
import { Accomplice } from '../../interfaces/accomplice';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-accomplice',
  standalone: true,
  imports: [TableModule],
  templateUrl: './accomplice.component.html',
  styleUrl: './accomplice.component.scss',
})
export class AccompliceComponent {
  accomplicies: Accomplice[] = [
    {
      id: '1',
      createdAt: new Date(),
      isActive: true,
      name: 'The Nine',
      remark: 'Niti',
      phone: '',
    },
    {
      id: '2',
      createdAt: new Date(),
      isActive: true,
      name: 'The Maple Condo @ Ratchada 19',
      remark: '',
      phone: '',
    },
    {
      id: '3',
      createdAt: new Date(),
      isActive: true,
      name: 'SCB',
      remark: 'Bank',
      phone: '',
    },
  ];
}
