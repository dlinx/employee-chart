import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Employee } from "../../../model/employee.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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

  addReporteeForm!: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.addReporteeForm = this.fb.group({
      manager: this.managerId,
      employeeName: ['', [Validators.required, Validators.minLength(3)]],
      designation: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+1\s[0-9]{3}-[0-9]{3}-[0-9]{4}$/)]],
      employeeId: `E${Math.round(Math.random() * 1000).toString().padStart(3, '0')}`
    });
  }

  onModalClose() {
    this.modalOpenChange.emit(false)
  }
  onAddReporteeBtnClick() {
    if (this.addReporteeForm.invalid) return;
    this.modalOpen = false;
    // TODO: Update employee from form
    const emp: Employee = {
      ...this.addReporteeForm.value,
      children: [],
      manager: this.managerId
    }
    this.onAddReportee.emit(emp);
  }
}
