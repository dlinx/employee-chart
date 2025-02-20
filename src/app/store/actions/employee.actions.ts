import { createAction, props } from "@ngrx/store";
import { Employee, ReportingLinePayload } from "../../model/employee.model";

export const addReportee = createAction(
    '[Employee] Add Employee',
    props<{ employee: Employee }>()
);
export const editEmployee = createAction(
    '[Employee] Edit Employee',
    props<Employee>()
);
export const deleteEmployee = createAction(
    '[Employee] Delete Employee',
    props<{ employeeId: string, newManagerId: string }>()
);
export const changeReportingLine = createAction(
    '[Employee] Change Reporting Line',
    props<ReportingLinePayload>()
);

