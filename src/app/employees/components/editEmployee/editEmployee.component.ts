import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Employee } from "../../../model/employee.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'edit-employee',
  templateUrl: './editEmployee.component.html'
})
export class EditEmployeeComponent {
  @Input()
  modalOpen = false
  @Input()
  employee: Employee | undefined;

  @Output() modalOpenChange = new EventEmitter<boolean>();
  @Output() onEdit = new EventEmitter<Employee>();

  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      employeeId:this.employee!.employeeId,
      manager: this.employee!.manager,
      employeeName: [this.employee?.employeeName, [Validators.required, Validators.minLength(3)]],
      designation: [this.employee?.designation, [Validators.required]],
      email: [this.employee?.email, [Validators.required, Validators.email]],
      phone: [this.employee?.phone, [Validators.required, Validators.pattern(/^\+1\s[0-9]{3}-[0-9]{3}-[0-9]{4}$/)]],
    });
  }

  onEditBtnClick() {
    if (this.employeeForm.invalid) return;
    this.modalOpen = false;
    const emp: Employee = {
      ...this.employeeForm.value,
      children: []
    }
    this.onEdit.emit(emp);
  }
  onModalClose() {
    this.modalOpenChange.emit(false)
  }
}
