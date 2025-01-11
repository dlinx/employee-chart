import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'delete-employee',
  templateUrl: './deleteEmployee.component.html'
})
export class DeleteEmployeeComponent {
  @Input()
  modalOpen = false
  @Input()
  employee: any = null;

  @Output() modalOpenChange = new EventEmitter<boolean>();

  onModalClose() {
    this.modalOpenChange.emit(false)
  }
}
