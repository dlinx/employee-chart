import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'add-reportee',
  templateUrl: './addReportee.component.html'
})
export class AddReporteeComponent {
  @Input()
  modalOpen = false

  @Output() modalOpenChange = new EventEmitter<boolean>();

  onModalClose() {
    this.modalOpenChange.emit(false)
  }
}
