export interface Employee {
    email: string,
    employeeId: string,
    employeeName: string,
    designation: string,
    phone: string,
    manager: string,
    children?: Employee[]
}

export interface ReportingLinePayload {
    employeeId: string,
    managerId: string
}

