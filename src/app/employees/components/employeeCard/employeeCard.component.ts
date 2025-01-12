import { Component, Input } from "@angular/core";
import { Employee } from "../../../model/employee.model";

@Component({
    selector: 'employee-card',
    templateUrl: './employeeCard.component.html',
    styleUrl: './employeeCard.component.css'
})
export class EmployeeCardComponent {
    @Input() employee: Employee | null = null;
    @Input() x: string = '';
    @Input() y: string = '';
}