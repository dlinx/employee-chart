import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Employee } from "../../../model/employee.model";

@Component({
  selector: 'edit-employee',
  templateUrl: './editEmployee.component.html'
})
export class EditEmployeeComponent {
  @Input()
  modalOpen = false
  @Input()
  employee: Employee | null = null;

  @Output() modalOpenChange = new EventEmitter<boolean>();
  @Output() onEdit = new EventEmitter<Employee>();

  onEditBtnClick() {
    this.modalOpen = false;
    const emp: Employee = {
      designation: Math.random().toString(),
      email: Math.random().toString(),
      employeeId: this.employee?.employeeId || '',
      employeeName: Math.random().toString(),
      manager: Math.random().toString(),
      phone: Math.random().toString()
    }
    this.onEdit.emit(emp);
  }
  onModalClose() {
    this.modalOpenChange.emit(false)
  }
}
