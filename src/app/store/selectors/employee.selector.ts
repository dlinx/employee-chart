import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducer/employee.reducer';

export const selectEmployeeState = createFeatureSelector<State>('employees');

export const selectAllEmployees = createSelector(
  selectEmployeeState,
  (state: State) => state.employees || []
);

export const selectEmployeeById = (id: string) =>
  createSelector(selectAllEmployees, employees =>
    employees.find(emp => emp.employeeId === id)
  );
