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
  @Output() onDelete = new EventEmitter<string>();

  onDeleteBtnClick() {
    this.modalOpen = false;
    this.onDelete.emit(this.employee?.employeeId);
  }
  onModalClose() {
    this.modalOpenChange.emit(false)
  }
}
