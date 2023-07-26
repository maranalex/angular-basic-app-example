import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {
  MatButtonToggleChange,
  MatButtonToggleModule,
} from '@angular/material/button-toggle';
import { ApplicationRoutesParts } from '../../app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatButtonToggleModule,
  ],
})
export class SideBarComponent implements OnInit {
  applicationRoutes = ApplicationRoutesParts;
  selectedRoute;

  constructor(private router: Router) {}

  ngOnInit(): void {
    Object.values(ApplicationRoutesParts).forEach((route) => {
      console.log('route', route);
      console.log('url', this.router.url);
      if (this.router.url.includes(route)) {
        console.log('includes');

        this.selectedRoute = route;
      }
    });
  }

  navigateToSubRoute(toggleChange: MatButtonToggleChange) {
    this.router.navigate([toggleChange.value]);
  }
}
