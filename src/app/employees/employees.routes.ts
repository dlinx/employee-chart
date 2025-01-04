import { Routes } from '@angular/router';
import { EmployeeTableComponent, EmployeeTreeComponent } from './components';

export const routes: Routes = [
  {
    path:'tree',
    component: EmployeeTreeComponent
  },
  {
    path:'table',
    component: EmployeeTableComponent
  },
  { path: '**', redirectTo: '/employees/tree', pathMatch: 'full' },
];
