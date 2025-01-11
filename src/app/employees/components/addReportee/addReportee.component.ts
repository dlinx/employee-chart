import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Employee } from "../../../model/employee.model";

@Component({
  selector: 'add-reportee',
  templateUrl: './addReportee.component.html'
})
export class AddReporteeComponent {
  @Input()
  modalOpen = false
  @Input()
  managerId: string = ""

  @Output() modalOpenChange = new EventEmitter<boolean>();
  @Output() onAddReportee = new EventEmitter<Employee>();

  onModalClose() {
    this.modalOpenChange.emit(false)
  }
  onAddReporteeBtnClick() {
    this.modalOpen = false;
    // TODO: Update employee from form
    const emp: Employee = {
      designation: Math.random().toString(),
      email: Math.random().toString(),
      employeeId: Math.random().toString(),
      employeeName: Math.random().toString(),
      manager: this.managerId,
      phone: Math.random().toString()
    }
    this.onAddReportee.emit(emp);
  }
}
