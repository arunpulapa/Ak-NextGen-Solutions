import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
email = "pulapaarunn@gmail.com"
isMobileMenuOpen: boolean = false; // For mobile menu toggle
isDropdownVisible = false;
toggleDropdown() {
  this.isDropdownVisible = !this.isDropdownVisible;
}

toggleMobileMenu() {
  this.isMobileMenuOpen = !this.isMobileMenuOpen;
}
}
