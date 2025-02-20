import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Employee, ReportingLinePayload } from "../../../model/employee.model";
import { Observable, filter, map, pipe } from "rxjs";
import { Store } from "@ngrx/store";
import { selectAllEmployees } from "../../../store/selectors/employee.selector";
import { State } from "../../../store/reducer/employee.reducer";

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
  employees$: Observable<Employee[]>;

  managerId = ''

  constructor(private store: Store<{ employees: State }>) {
    this.employees$ = this.store.select(selectAllEmployees);
  }

  ngOnInit() {
    this.managerId = this.employee!.manager;
    this.employees$ = this.employees$.pipe(
      map((employees) =>
        employees.filter((e: any) => e.manager !== this.employee!.employeeId)
      )
    );
  }

  onModalClose() {
    this.modalOpenChange.emit(false)
  }
  onChangeBtnClick() {
    this.modalOpen = false;
    this.onChangeReportingLine.emit({ employeeId: this.employee?.employeeId || '', managerId: this.managerId })
  }
}
