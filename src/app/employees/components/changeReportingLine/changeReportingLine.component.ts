import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Employee } from "../../../model/employee.model";

@Component({
  selector: 'change-reporting-line',
  templateUrl: './changeReportingLine.component.html'
})
export class ChangeReportingLineComponent {
  @Input()
  modalOpen = false
  @Input()
  employee: Employee | null = null;

  @Output() modalOpenChange = new EventEmitter<boolean>();

  onModalClose() {
    this.modalOpenChange.emit(false)
  }
}
