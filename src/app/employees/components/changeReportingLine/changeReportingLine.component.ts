import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Employee, ReportingLinePayload } from "../../../model/employee.model";

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
  @Output() onChangeReportingLine = new EventEmitter<ReportingLinePayload>();

  managerId = '123'
  onModalClose() {
    this.modalOpenChange.emit(false)
  }
  onChangeBtnClick() {
    this.modalOpen = false;
    this.onChangeReportingLine.emit({ employeeId: this.employee?.employeeId || '', managerId: this.managerId })
  }
}
