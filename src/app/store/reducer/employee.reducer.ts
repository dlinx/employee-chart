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
      designation: "Software Engineer",
      phone: "+1 408-832-3111",
      manager: "E005"
    },
    {
      email: "jane.smith@example.com",
      employeeId: "E002",
      employeeName: "Jane Smith",
      designation: "Product Manager",
      phone: "+1 408-832-3112",
      manager: "E006"
    },
    {
      email: "alice.jones@example.com",
      employeeId: "E003",
      employeeName: "Alice Jones",
      designation: "UX Designer",
      phone: "+1 408-832-3113",
      manager: "E005"
    },
    {
      email: "bob.brown@example.com",
      employeeId: "E004",
      employeeName: "Bob Brown",
      designation: "QA Engineer",
      phone: "+1 408-832-3114",
      manager: "E007"
    },
    {
      email: "charlie.davis@example.com",
      employeeId: "E005",
      employeeName: "Charlie Davis",
      designation: "Engineering Manager",
      phone: "+1 408-832-3115",
      manager: "E010"
    },
    {
      email: "david.miller@example.com",
      employeeId: "E006",
      employeeName: "David Miller",
      designation: "Senior Product Manager",
      phone: "+1 408-832-3116",
      manager: "E010"
    },
    {
      email: "eva.lee@example.com",
      employeeId: "E007",
      employeeName: "Eva Lee",
      designation: "Software Engineer",
      phone: "+1 408-832-3117",
      manager: "E005"
    },
    {
      email: "frank.wilson@example.com",
      employeeId: "E008",
      employeeName: "Frank Wilson",
      designation: "Data Scientist",
      phone: "+1 408-832-3118",
      manager: "E010"
    },
    {
      email: "grace.moore@example.com",
      employeeId: "E009",
      employeeName: "Grace Moore",
      designation: "HR Manager",
      phone: "+1 408-832-3119",
      manager: "E010"
    },
    {
      email: "henry.garcia@example.com",
      employeeId: "E010",
      employeeName: "Henry Garcia",
      designation: "CTO",
      phone: "+1 408-832-3120",
      manager: "E010"
    },
    {
      email: "isla.perez@example.com",
      employeeId: "E011",
      employeeName: "Isla Perez",
      designation: "Marketing Manager",
      phone: "+1 408-832-3121",
      manager: "E009"
    },
    {
      email: "jackson.white@example.com",
      employeeId: "E012",
      employeeName: "Jackson White",
      designation: "Full Stack Developer",
      phone: "+1 408-832-3122",
      manager: "E005"
    },
    {
      email: "kimberly.clark@example.com",
      employeeId: "E013",
      employeeName: "Kimberly Clark",
      designation: "Product Designer",
      phone: "+1 408-832-3123",
      manager: "E006"
    },
    {
      email: "luke.harris@example.com",
      employeeId: "E014",
      employeeName: "Luke Harris",
      designation: "Business Analyst",
      phone: "+1 408-832-3124",
      manager: "E007"
    },
    {
      email: "michael.rodriguez@example.com",
      employeeId: "E015",
      employeeName: "Michael Rodriguez",
      designation: "Project Manager",
      phone: "+1 408-832-3125",
      manager: "E010"
    },
    {
      email: "natalie.martinez@example.com",
      employeeId: "E016",
      employeeName: "Natalie Martinez",
      designation: "DevOps Engineer",
      phone: "+1 408-832-3126",
      manager: "E005"
    },
    {
      email: "olivia.gonzalez@example.com",
      employeeId: "E017",
      employeeName: "Olivia Gonzalez",
      designation: "Software Engineer",
      phone: "+1 408-832-3127",
      manager: "E005"
    },
    {
      email: "peter.kim@example.com",
      employeeId: "E018",
      employeeName: "Peter Kim",
      designation: "Network Engineer",
      phone: "+1 408-832-3128",
      manager: "E010"
    },
    {
      email: "quincy.reyes@example.com",
      employeeId: "E019",
      employeeName: "Quincy Reyes",
      designation: "Product Owner",
      phone: "+1 408-832-3129",
      manager: "E009"
    },
    {
      email: "rachel.carter@example.com",
      employeeId: "E020",
      employeeName: "Rachel Carter",
      designation: "Marketing Specialist",
      phone: "+1 408-832-3130",
      manager: "E011"
    }
  ]
};

export const employeeReducer = createReducer(
  initialState,

  on(EmployeeActions.addReportee, (state, { employee }) => ({
    ...state,
    employees: [...state.employees, employee]
  })),

  on(EmployeeActions.editEmployee, (state, { payload }) => ({
    ...state,
    employees: state.employees.map(emp =>
      emp.employeeId === payload.employeeId ? { ...emp, ...payload } : emp
    )
  })),

  on(EmployeeActions.deleteEmployee, (state, { employeeId }) => ({
    ...state,
    employees: state.employees.filter(emp => emp.employeeId !== employeeId)
  })),

  on(EmployeeActions.changeReportingLine, (state, { payload }) => ({
    ...state,
    employees: state.employees.map(emp =>
      emp.employeeId === payload.employeeId ? { ...emp, reportingTo: payload.managerId } : emp
    )
  }))
);
