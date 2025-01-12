import { createReducer, on } from "@ngrx/store";
import { Employee } from "../../model/employee.model";
import * as EmployeeActions from '../actions/employee.actions'

export interface State {
  employees: Employee[];
}

const initialState: State = {
  employees: [
    {
      email: "john.doe@example.com",
      employeeId: "E001",
      employeeName: "John Doe",
      designation: "CEO",
      phone: "+1 123-123-1234",
      manager: "",
      children: []
    },
    {
      email: "jane.smith@example.com",
      employeeId: "E002",
      employeeName: "Jane Smith",
      designation: "CTO",
      phone: "+1 234-234-2345",
      manager: "E001",
      children: []
    },
    {
      email: "robert.brown@example.com",
      employeeId: "E003",
      employeeName: "Robert Brown",
      designation: "CFO",
      phone: "+1 345-345-3456",
      manager: "E001",
      children: []
    },
    {
      email: "emily.davis@example.com",
      employeeId: "E004",
      employeeName: "Emily Davis",
      designation: "Engineering Manager",
      phone: "+1 456-456-4567",
      manager: "E002",
      children: []
    },
    {
      email: "michael.jones@example.com",
      employeeId: "E005",
      employeeName: "Michael Jones",
      designation: "Engineering Manager",
      phone: "+1 567-567-5678",
      manager: "E002",
      children: []
    },
    {
      email: "david.clark@example.com",
      employeeId: "E007",
      employeeName: "David Clark",
      designation: "Finance Manager",
      phone: "+1 789-789-7890",
      manager: "E003",
      children: []
    },
    {
      email: "olivia.lee@example.com",
      employeeId: "E008",
      employeeName: "Olivia Lee",
      designation: "Software Engineer",
      phone: "+1 890-890-8901",
      manager: "E004",
      children: []
    },
    {
      email: "emma.hall@example.com",
      employeeId: "E010",
      employeeName: "Emma Hall",
      designation: "Software Engineer",
      phone: "+1 012-012-0123",
      manager: "E005",
      children: []
    }
  ]
};

export const employeeReducer = createReducer(
  initialState,

  on(EmployeeActions.addReportee, (state, { employee }) => ({
    ...state,
    employees: [...state.employees, employee]
  })),

  on(EmployeeActions.editEmployee, (state, employee) => ({
    ...state,
    employees: state.employees.map(emp =>
      emp.employeeId === employee.employeeId ? { ...emp, ...employee } : emp
    )
  })),

  on(EmployeeActions.deleteEmployee, (state, { employeeId, newManagerId }) => ({
    ...state,
    employees: state.employees.filter(emp => emp.employeeId !== employeeId).map(emp => emp.manager === employeeId ? { ...emp, manager: newManagerId } : emp)
  })),

  on(EmployeeActions.changeReportingLine, (state, { employeeId, managerId }) => ({
    ...state,
    employees: state.employees.map(emp =>
      emp.employeeId === employeeId ? { ...emp, manager: managerId } : emp
    )
  }))
);
