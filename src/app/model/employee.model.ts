export interface Employee {
    email: string,
    employeeId: string,
    employeeName: string,
    designation: string,
    phone: string,
    manager: string,
}

export interface ReportingLinePayload {
    employeeId: string,
    managerId: string
}

