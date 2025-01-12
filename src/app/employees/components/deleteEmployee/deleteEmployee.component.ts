import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Employee } from "../../../model/employee.model";

@Component({
  selector: 'delete-employee',
  templateUrl: './deleteEmployee.component.html'
})
export class DeleteEmployeeComponent {
  @Input()
  modalOpen = false
  @Input()
  employee: Employee | null = null;

  @Output() modalOpenChange = new EventEmitter<boolean>();
  @Output() onDelete = new EventEmitter<{ empId: string, newManager: string }>();

  onDeleteBtnClick() {
    this.modalOpen = false;
    this.onDelete.emit({ empId: this.employee!.employeeId!, newManager: this.employee!.manager });
  }
  onModalClose() {
    this.modalOpenChange.emit(false)
  }
}
