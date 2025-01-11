import { NgModule } from '@angular/core';
import { EmployeeTableComponent, EmployeeTreeComponent } from './components';
import { RouterModule } from '@angular/router';
import { routes } from './employees.routes';
import { CommonModule } from '@angular/common';
import { ClarityModule, ClrDatagridModule, ClrModalModule } from '@clr/angular';
import { AddReporteeComponent } from './components/addReportee/addReportee.component';
import { ChangeReportingLineComponent } from './components/changeReportingLine/changeReportingLine.component';
import { DeleteEmployeeComponent } from './components/deleteEmployee/deleteEmployee.component';

@NgModule({
  declarations: [
    EmployeeTableComponent, 
    EmployeeTreeComponent,
    AddReporteeComponent,
    ChangeReportingLineComponent,
    DeleteEmployeeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ClarityModule,
    ClrDatagridModule,
    ClrModalModule,
  ],
})
export class EmployeesModule {}
