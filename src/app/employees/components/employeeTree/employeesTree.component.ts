import { Component, ElementRef, TemplateRef, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "../../../store/reducer/employee.reducer";
import { selectAllEmployees } from "../../../store/selectors/employee.selector";
import { Observable, map, shareReplay } from "rxjs";
import { Employee } from "../../../model/employee.model";
import * as d3 from 'd3';
import { OrgChart } from 'd3-org-chart';

interface EmployeeTreeCard extends Employee {
  x?: number,
  y?: number
}
@Component({
  selector: 'employee-tree',
  templateUrl: './employeesTree.component.html'
})
export class EmployeeTreeComponent {
  employees$: Observable<Employee[]>;
  treeData$: Observable<Employee[]>;
  chart: OrgChart<any> | null = null;
  @ViewChild('employeeCard', { static: true, read: TemplateRef }) employeeCard!: TemplateRef<any>;
  @ViewChild('overlay') overlay!: ElementRef<HTMLDivElement>;

  constructor(private store: Store<{ employees: State }>, private el: ElementRef) {
    this.employees$ = this.store.select(selectAllEmployees);
    this.treeData$ = this.employees$.pipe(
      map(employees => this.buildTree(employees)),
      shareReplay(1)
    );
  }
  ngAfterViewInit() {
    this.treeData$.subscribe(data => {
      this.renderTree(data[0])
    })
  }

  renderTree(data: Employee) {
    const svgWidth = window.innerWidth;
    const svgHeight = window.innerWidth;
    const margin = { top: 40, right: 120, bottom: 40, left: 120 };

    // Create SVG container
    const svg = d3.select(".org-chart")
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight);

    // Create hierarchy from data
    const root = d3.hierarchy(data);

    // Define tree layout
    const treeLayout = d3
      .tree<Employee>()
      .size([svgWidth - margin.left - margin.right, svgHeight - margin.top - margin.bottom])
    // .nodeSize([150,50])
    // .separation((a, b) => (a.parent === b.parent ? 1 : 1.25));
    // Compute the tree layout
    treeLayout(root);

    // Create links
    svg.selectAll(".link")
      .data(root.links())
      .join("path")
      .attr("class", "link")
      .attr("d", d => {
        // Calculate the vertical distance for the initial straight line
        const sourceY = d.source.y! + margin.top + 75;
        const sourceX = d.source.x!;
        const targetY = d.target.y! + margin.top;
        const targetX = d.target.x!;
        const splitPoint = sourceY + 150;

        // Create an elbow path with split point
        return `M ${sourceX} ${sourceY} 
                L ${sourceX} ${splitPoint}
                L ${targetX} ${splitPoint}
                L ${targetX} ${targetY}`;
      })
      .style("fill", "none")
      .style("stroke", "#ccc")
      .style("stroke-width", 2);

    // Create nodes
    const nodes = svg.selectAll(".node")
      .data(root.descendants())
      .join("g")
      .attr("class", "node")
      .attr('width', '350px')
      .attr("transform", d => `translate(${d.x!}, ${d.y!})`);

    nodes.each(node => {
      const ref = this.employeeCard.createEmbeddedView({ $implicit: { emp: node.data, x: `${node.x! - 150}px`, y: `${node.y! + 75}px` } });
      ref.detectChanges();

      if (ref.rootNodes[0])
        this.overlay?.nativeElement.appendChild(ref.rootNodes[0]);
    })
  }
  private buildTree(employees: Employee[]): Employee[] {
    const idMap: { [key: string]: EmployeeTreeCard } = {};
    const tree: EmployeeTreeCard[] = [];

    employees.forEach(emp => {
      idMap[emp.employeeId] = { ...emp, children: [] };
    });

    employees.forEach(emp => {
      if (emp.manager) {
        idMap[emp.manager]?.children?.push(idMap[emp.employeeId]);
      } else {
        tree.push(idMap[emp.employeeId]);
      }
    });

    return tree;
  }
}