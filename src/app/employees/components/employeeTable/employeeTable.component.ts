import { Component } from '@angular/core';
import { Employee } from '../../../model/employee.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../../store/reducer/employee.reducer';
import { selectAllEmployees } from '../../../store/selectors/employee.selector';
import * as EmployeeActions from '../../../store/actions/employee.actions';

@Component({
  selector: 'employee-table',
  templateUrl: './employeeTable.component.html',
  styleUrl: './employeeTable.component.css'
})
export class EmployeeTableComponent {
  employees$: Observable<Employee[]>;

  addReporteeModal = false;
  changeReportingLineModal = false;
  deleteEmployeeModal = false;
  editEmployeeModal = false;
  selectedEmployees = [];
  currentPage = 1;
  pageSize = 10;
  currentEmployee: Employee | null = null;

  constructor(private store: Store<{ employees: State }>) {
    this.employees$ = this.store.select(selectAllEmployees);
  }

  addReportee = (emp: Employee) => {
    this.currentEmployee = emp;
    this.addReporteeModal = true;
  };
  editDetails = (emp: Employee) => {
    this.editEmployeeModal = true;
  };
  deleteEmployee = (emp: Employee) => {
    this.deleteEmployeeModal = true;
    this.currentEmployee = emp
  };
  changeReportingLine = (emp: Employee) => {
    this.changeReportingLineModal = true;
    this.currentEmployee = emp
  };

  onDeleteEmployee = (empId: string) => {
    this.store.dispatch(EmployeeActions.deleteEmployee({ employeeId: empId }))
  }
  onAddReportee(emp: Employee) {
    this.store.dispatch(EmployeeActions.addReportee({ employee: emp }))
  }
  onChangeReportingLine(reporting: { employeeId: string, managerId: string }) {
    const { employeeId, managerId } = reporting;
    this.store.dispatch(EmployeeActions.changeReportingLine({ employeeId, managerId }));
  }
  onEditEmployee(employee: Employee) {
    this.store.dispatch(EmployeeActions.editEmployee(employee));
  }
}
