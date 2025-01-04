import { NgModule } from "@angular/core";
import { EmployeeTableComponent, EmployeeTreeComponent } from "./components";
import { RouterModule, provideRouter } from "@angular/router";
import { routes } from "./employees.routes";

@NgModule({
    declarations:[EmployeeTableComponent,EmployeeTreeComponent],
    imports:[RouterModule.forChild(routes)]
})
export class EmployeesModule {

}