import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
email = "aknextgensolutions@gmail.com"
isMobileMenuOpen: boolean = false; // For mobile menu toggle
isDropdownVisible = false;
constructor(private themeService: ThemeService) {}
toggleDropdown() {
  this.isDropdownVisible = !this.isDropdownVisible;
}

toggleMobileMenu() {
  this.isMobileMenuOpen = !this.isMobileMenuOpen;
}
toggleTheme(): void {
  this.themeService.toggleTheme();
}
}
