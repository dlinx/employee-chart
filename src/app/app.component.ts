import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EmployeesModule } from './employees/employees.module';
import { ClrIconModule } from '@clr/angular';
import { ClarityIcons, cogIcon, gridViewIcon, tableIcon, userIcon, usersIcon } from '@cds/core/icon';
import '@cds/core/icon/register.js';

ClarityIcons.addIcons(usersIcon, gridViewIcon, cogIcon, tableIcon, userIcon);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    EmployeesModule,
    ClrIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent { }
