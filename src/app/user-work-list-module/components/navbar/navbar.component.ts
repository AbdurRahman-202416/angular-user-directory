import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isScrolled = false;

  navLinks = [
    { path: '/', label: 'Home', icon: 'home' },
    { path: '/work/user-work', label: 'Work List', icon: 'bubble_chart' },
    { path: '/work/ngx-datatable', label: 'Data Table', icon: 'grid_view' },
    { path: '/work/formly', label: 'Formly Form', icon: 'auto_awesome' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }
}
