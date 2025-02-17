import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CursorEffectComponent } from "../../components/cursor-effect/cursor-effect.component";
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CursorEffectComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ak-nextgen-solutions';
  scrollPercentage: number = 0; // To store the scroll percentage
  circleProgressColor: string = "conic-gradient(#007bff 0% 0%, #f0f0f0 0% 100%)"; // Default circle progress color
circleProgress: any;

  // Listen to scroll events
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.calculateScrollProgress();
  }

  // Calculate the scroll progress
  calculateScrollProgress(): void {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollPercentage = Math.round((scrollTop / docHeight) * 100);

    // Update the progress circle (this can be customized to change colors dynamically based on scroll)
    this.circleProgressColor = `conic-gradient(#007bff ${this.scrollPercentage}% ${this.scrollPercentage}%, #f0f0f0 0% 100%)`;
  }

  // Scroll to the top when the user clicks on the circle
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  ngOnInit(): void {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true // Ensures animation runs only once
    });
  }
  
}
