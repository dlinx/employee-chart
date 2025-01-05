import { NgModule } from '@angular/core';
import { EmployeeTableComponent, EmployeeTreeComponent } from './components';
import { RouterModule } from '@angular/router';
import { routes } from './employees.routes';
import { CommonModule } from '@angular/common';
import { ClarityModule, ClrDatagridModule } from '@clr/angular';

@NgModule({
  declarations: [EmployeeTableComponent, EmployeeTreeComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ClarityModule,
    ClrDatagridModule
  ],
})
export class EmployeesModule {}
