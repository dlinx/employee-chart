import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'change-reporting-line',
  templateUrl: './changeReportingLine.component.html'
})
export class ChangeReportingLineComponent {
  @Input()
  modalOpen = false
  @Input()
  employee:any = null;

  @Output() modalOpenChange = new EventEmitter<boolean>();

  onModalClose() {
    console.log(this.employee)
    this.modalOpenChange.emit(false)
  }
}
