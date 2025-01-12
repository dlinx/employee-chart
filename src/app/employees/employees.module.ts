import { NgModule } from '@angular/core';
import { EmployeeTableComponent, EmployeeTreeComponent } from './components';
import { RouterModule } from '@angular/router';
import { routes } from './employees.routes';
import { CommonModule } from '@angular/common';
import { ClarityModule, ClrDatagridModule, ClrModalModule } from '@clr/angular';
import { AddReporteeComponent } from './components/addReportee/addReportee.component';
import { ChangeReportingLineComponent } from './components/changeReportingLine/changeReportingLine.component';
import { DeleteEmployeeComponent } from './components/deleteEmployee/deleteEmployee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './components/editEmployee/editEmployee.component';
import { EmployeeCardComponent } from './components/employeeCard/employeeCard.component';

@NgModule({
  declarations: [
    EmployeeTableComponent, 
    EmployeeTreeComponent,
    AddReporteeComponent,
    ChangeReportingLineComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
    EmployeeCardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ClarityModule,
    ClrDatagridModule,
    ClrModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class EmployeesModule {}
